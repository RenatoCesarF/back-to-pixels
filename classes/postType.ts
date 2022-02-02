import matter from 'gray-matter';
import {readdirSync, readFileSync} from 'fs';
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

export const getCoverImage = (slug: string, image_name:any) =>{
  var coverImage;
  
  if(!isImageCoverValid(slug, image_name) || typeof(image_name) === "number"){
    var defaultImageIndex = image_name || Math.floor(Math.random() * 4) + 1;
    coverImage = `/images/posts/default-images/${defaultImageIndex}.webp`;
    return coverImage;
  }
  coverImage = `/images/posts/${slug}/${image_name}.webp`;   
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

const isImageCoverValid = (slug: string, image_name: any) => {
  const isImageTextValid: boolean = (typeof(image_name) === "string" && !image_name.toString().startsWith('https'))
  if(image_name === null || !isImageTextValid ){
    return false; 
  }

  var imageExistInFolder = false;    
  const images: Array<string> = readdirSync(join(`public/images/posts/${slug}`));

  for(let image of images) {
    if(image.replace('.webp', '') === image_name){
      imageExistInFolder = true;
      break;
    }
  }
  return imageExistInFolder;
}