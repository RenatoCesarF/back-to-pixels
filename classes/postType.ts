import { isNumber } from 'util';
import Author from './authorType'
import Category from './category'

type Post = {
  author: Author,
  content: string,
  cover_image: string
  categories: Category[]
  date: string,
  excerpt: string,
  slug: string,
  code_theme: string, // need to create a type that store these values
  title: string,
}

export default Post;

export const getCoverImage = (slug: string, image_path:string) =>{
  var coverImage;
  
  if(!image_path || typeof(image_path) === "number"){
    var defaultImageIndex = image_path || Math.floor(Math.random() * 4);
    coverImage = `https://codingideas.vercel.app/images/posts/defaultImages/${defaultImageIndex}.webp`;
    return coverImage;
  }

  if(image_path.startsWith('https')){
    throw new Error("Cover image doens't need to be online, just past it in the images/post folder and declare it's name (without type) in the .md file");
  }

  coverImage = `https://codingideas.vercel.app/images/posts/${slug}/${image_path}.webp`;   
  return coverImage; 
}