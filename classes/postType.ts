import matter from 'gray-matter';
import {readFileSync} from 'fs';
import {join} from 'path';
import { isNumber } from 'util';
import Author from './authorType'
import Category, { getCategories } from './category'

type Post = {
  author: Author,
  content: string,
  cover_image: string
  categories: Category[]
  date: string,
  excerpt: string,
  slug: string,
  code_theme: string, // need to create a type that store these values
  code_language: string,
  title: string,
}

export default Post;

export const getCoverImage = (slug: string, image_path:string) =>{
  var coverImage;
  
  if(image_path === null || typeof(image_path) === "number"){
    var defaultImageIndex = image_path || Math.floor(Math.random() * 4) + 1;
    console.log("-----------");
    console.log(defaultImageIndex);
    console.log("-----------");
    coverImage = `https://codingideas.vercel.app/images/posts/defaultImages/${defaultImageIndex}.webp`;
    return coverImage;
  }

  if(image_path.startsWith('https')){
    throw new Error("Cover image doens't need to be online, just past it in the images/post folder and declare it's name (without type) in the .md file");
  }

  coverImage = `https://codingideas.vercel.app/images/posts/${slug}/${image_path}.webp`;   
  return coverImage; 
}

export const createPost = (filename: string): Post => {
  const slug: string = filename.replace('.md', '');
  const markdownWithMeta = readFileSync(join('posts', filename), 'utf-8');
  const {data, content} = matter(markdownWithMeta);

  // verifyPostValues(data);

  const postAuthor: Author = {name: data.author, about: "", email: "", image:"", instagram: "", twitter: "", role: ""}
  const categories: Category[] = getCategories(data.categories);
  const coverImage = getCoverImage(slug,data.cover_image);
  
  const post: Post = {
    slug,
    content,
    author: postAuthor,
    cover_image: coverImage,
    categories: categories,
    date:data.date,
    excerpt: data.excerpt, 
    title: data.title,
    code_theme: data.code_theme ?? null,
    code_language: data.code_language ?? "python",  
  }
  return post;
}

const verifyPostValues = (post:Post) =>{
  if(!post.title || post.title.length < 5){
    throw new Error("Title null or too short");
  }
}
