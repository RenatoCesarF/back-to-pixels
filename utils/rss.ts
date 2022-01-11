import { Feed } from "feed";

import Post from '../classes/postType';

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