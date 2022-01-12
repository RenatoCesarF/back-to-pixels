import fs from 'fs'
import path from 'path'

import { Feed } from "feed";
import matter from 'gray-matter';

import Post from '../classes/postType';
import Author from '../classes/authorType';


async function generateRssFeed() {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  console.log("Creating RSS feeds");
  const baseUrl = "https://localhost:3000";
  const date = new Date();
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
        atom: `${baseUrl}/rss/atom.xml`,
      },
      author,
  });


  const files = fs.readdirSync(path.join('posts'));
    
  files.map((filename: string) => {
    const slug: string = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const {data, content} = matter(markdownWithMeta);
    const maximumExcerptSize: number = 80
    if(data.excerpt.length > maximumExcerptSize){
        data.excerpt = data.excerpt.substr(0, maximumExcerptSize) + '...';
    }

    
    const url = `${baseUrl}/${data.slug}`;
    feed.addItem({
      title: data.title,
      id: data.slug,
      link: url,
      description: data.excerpt,
      content:  content,
      author: [data.author],
      contributor: [author],
      date: new Date(data.date),
    });
  });


  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}

export default generateRssFeed;