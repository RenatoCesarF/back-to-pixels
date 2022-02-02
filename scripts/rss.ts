import fs from 'fs'
import path from 'path'

import { Feed ,Item} from "feed";
import matter from 'gray-matter';
import { getCoverImage } from '../classes/postType';


async function generateRssFeed() {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  return;
  console.log("Creating RSS feeds");
  const baseUrl= "https://codingideas.vercel.app";
  const date  = new Date();
  const author = {
      name: "Renato Cesar",
      email: "re.fbarcellos@hotmail.com",
      link: "https://twitter.com/nerat0",
  };

  const feed = new Feed({
      title: `DevBlog`,
      description: "Welcome to the blog containing all the articles and documentation about all the games and projects that I (Renato Cesar) produce with my team",
      id: baseUrl,
      link: baseUrl,
      language: "en",
      //image: `${baseUrl}/images/logo.svg`,
      //favicon: `${baseUrl}/favicon.ico`,
      copyright: `All rights reserved ${date.getFullYear()}, Renato Cesar`,
      updated: date,
      generator: "Next.js using Feed for Node.js",
      feedLinks: {
        rss2: `${baseUrl}/rss/feed.xml`,
        json: `${baseUrl}/rss/feed.json`,
        // atom: `${baseUrl}/rss/atom.xml`,
      },
      author,
  });


  const files = fs.readdirSync(path.join('posts'));
    
  files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const {data} = matter(markdownWithMeta);
    const maximumExcerptSize = 80
    if(data.excerpt.length > maximumExcerptSize){
        data.excerpt = data.excerpt.substr(0, maximumExcerptSize) + '...';
    } 
    const url = `${baseUrl}/${slug}`;
    const item: Item = {
      title: data.title,
      image: getCoverImage(slug, data.cover_image),
      link: url.toString(),
      date: new Date(),
      id: slug,
      description: data.excerpt,
      content:  data.content,
      author: data.author.toString(),
      contributor: [author],
    }
    feed.addItem(item);
  });

  feed.rss2
  feed.atom1
  feed.json1
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
  // fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  console.log("Finish RSS feeds")
}

export default generateRssFeed;