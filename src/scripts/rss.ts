import fs from 'fs'
import path from 'path'
import MarkdownIt from 'markdown-it';
import { Feed ,Item} from "feed";
import matter from 'gray-matter';
import { getCoverImage } from '@root/src/classes/postType';
import { sortByDate } from '@root/src/utils/sort';
import { getAuthor } from '@root/src/classes/authorType';

import WEB_SITE_INFO from '@root/src/utils/webSiteInfo';


async function generateRssFeed() {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  console.log("Creating RSS feeds...");
  const date  = new Date();
  const author = {
      name: "Renato Cesar",
      email: "re.fbarcellos@hotmail.com",
      link: "https://twitter.com/nerat0",
  };

  const feed = new Feed({
      title: WEB_SITE_INFO.NAME,
      description: "Welcome to the blog containing all the articles and documentation about all the games and projects we produce",
      id: WEB_SITE_INFO.DEFAULT_URL,
      link: WEB_SITE_INFO.DEFAULT_URL,
      language: "en",
      image: `${WEB_SITE_INFO.DEFAULT_URL}/images/logo.png`,
      favicon: `${WEB_SITE_INFO.DEFAULT_URL}/favicon.ico`,
      copyright: `All rights reserved ${date.getFullYear()}, Renato Cesar`,
      updated: date,
      author: author,
      generator: "Next.js using Feed for Node.js",
      feedLinks: {
        rss2: `${WEB_SITE_INFO.DEFAULT_URL}/rss/feed.xml`,
        json: `${WEB_SITE_INFO.DEFAULT_URL}/rss/feed.json`,
        atom: `${WEB_SITE_INFO.DEFAULT_URL}/rss/atom.xml`,
      }
  });


  //Create list o post items
  const postItems: Item[] = createListWithAllPosts();

  //Sorting and adding posts
  const sortedItems: Item[] = postItems.sort(sortByDate);
  sortedItems.forEach((item: Item) =>{
    feed.addItem(item);
  });

  exportFeedIntoFiles(feed);

  console.log("Finish RSS feeds")
}

const createListWithAllPosts = (): Item[] => {
  const files = fs.readdirSync(path.join('posts'));
  
  const items: Item[] = files.map((filename) => {
    return createPostItemToFeed(filename)
  });
  return items;
}

const  createPostItemToFeed = (filename: string): Item => {
  const slug = filename.replace('.md', '');
  const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
  const {data, content} = matter(markdownWithMeta);

  const htmlContent = new MarkdownIt().render(content);
  const postAuthor = getAuthor(data.author);
  const url = `${WEB_SITE_INFO.DEFAULT_URL}/blog/${slug}`;
  var feedCategories: any[] = [];
  data.categories.forEach((element: string) => feedCategories.push({name: element.toLowerCase()}));
  
  const item: Item = {
    title: data.title,
    image: `${WEB_SITE_INFO.DEFAULT_URL}${getCoverImage(slug, data.cover_image)}`,
    link: url,
    date: new Date(data.date),
    id: slug,
    published: new Date(data.date),
    category: feedCategories,
    description: data.excerpt,
    content: htmlContent.toString(),
    author: [ { name: postAuthor.name, email: postAuthor.email, link: `https://twitter.com/${postAuthor.twitter}`}],
  }
  return item;
}

const exportFeedIntoFiles = (feed: Feed) => {
  fs.mkdirSync("@public/rss", { recursive: true });
  fs.writeFileSync("@public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("@public/rss/feed.json", feed.json1());
  fs.writeFileSync("@public/rss/atom.xml", feed.atom1());
}

export default generateRssFeed;

