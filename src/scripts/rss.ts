import fs from 'fs'
import MarkdownIt from 'markdown-it';
import { Feed, Item } from "feed";
import matter from 'gray-matter';

import { getPostsFileName, getCoverImage, getSinglePostData } from '@classes/Post';
import { sortByDate } from '@utils/sort';
import { getAuthor } from '@classes/Author';
import WEBSITE_INFO from '@helpers/webSiteInfo';



async function generateRssFeed() {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  console.log("Creating RSS feeds...");
  const date = new Date();
  const author = {
    name: "Renato Cesar",
    email: "re.fbarcellos@hotmail.com",
    link: "https://twitter.com/nerat0",
  };

  const feed = new Feed({
    title: WEBSITE_INFO.NAME,
    description: "Welcome to the blog containing all the articles and documentation about all the games and projects we produce",
    id: WEBSITE_INFO.URL,
    link: WEBSITE_INFO.URL,
    language: "en",
    image: `${WEBSITE_INFO.URL}${WEBSITE_INFO.LOGO_PATH}`,
    favicon: `${WEBSITE_INFO.URL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Renato Cesar`,
    updated: date,
    author: author,
    generator: "Next.js using Feed for Node.js",
    feedLinks: {
      rss2: `${WEBSITE_INFO.URL}/rss/feed.xml`,
      json: `${WEBSITE_INFO.URL}/rss/feed.json`,
      atom: `${WEBSITE_INFO.URL}/rss/atom.xml`,
    }
  });


  const postItems: Item[] = createListWithAllPosts();

  //Sorting and adding posts
  const sortedItems: Item[] = postItems.sort(sortByDate);
  sortedItems.forEach((item: Item) => {
    feed.addItem(item);
  });

  exportFeedIntoFiles(feed);

  console.log("Finish RSS feeds");
}

const createListWithAllPosts = (): Item[] => {
  const files = getPostsFileName();
  const items: Item[] = []
  files.forEach(filename => {
    if (!filename.startsWith(".") && !filename.includes("DS_Store")) {
      items.push(createPostItemToFeed(filename))
    }
  });
  return items;
}

const createPostItemToFeed = (filename: string): Item => {
  const contentFile = filename + "/content.md"
  const slug = filename.replace('.md', '');
  const markdownWithMeta = getSinglePostData(contentFile.replace(".md", ""));
  const { data, content } = matter(markdownWithMeta);

  const htmlContent = new MarkdownIt().render(content);
  const postAuthor = getAuthor(data.author);
  const url = `${WEBSITE_INFO.URL}/blog/${slug}`;
  var feedCategories: any[] = [];
  data.categories.forEach((element: string) => feedCategories.push({ name: element.toLowerCase() }));

  const item: Item = {
    title: data.title,
    image: `${WEBSITE_INFO.URL}${getCoverImage(slug, data.cover_image)}`,
    link: url,
    date: new Date(data.date),
    id: slug,
    published: new Date(data.date),
    category: feedCategories,
    description: data.excerpt,
    content: htmlContent.toString(),
    author: [{ name: postAuthor.name, email: postAuthor.email, link: `https://twitter.com/${postAuthor.twitter}` }],
  }
  return item;
}

const exportFeedIntoFiles = (feed: Feed) => {
  fs.mkdirSync("public/rss", { recursive: true });
  fs.writeFileSync("public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("public/rss/feed.json", feed.json1());
  fs.writeFileSync("public/rss/atom.xml", feed.atom1());
}

export default generateRssFeed;

