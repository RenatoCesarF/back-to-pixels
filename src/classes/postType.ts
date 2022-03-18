import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import {join} from 'path';
import Author, { getAuthor } from '@classes/authorType'
import Category, { getPostCategories } from '@classes/category'

const postsFolderPath: string = 'src/posts';

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

export const getCoverImage = (slug: string, image_name:any) =>{
  var coverImage;
  
  if(typeof(image_name) === "number" || !isImageCoverValid(slug, image_name)){
    var defaultImageIndex = image_name || Math.floor(Math.random() * 4) + 1;
    coverImage = `/images/posts/default-images/${defaultImageIndex}.webp`;
    return coverImage;
  }
  coverImage = `/images/posts/${slug}/${image_name}.webp`;   
  return coverImage; 
}

export const createPost = (filename: string): Post => {
  const slug: string = filename.replace('.md', '');
  const markdownWithMeta = getSinglePostData(filename);
  const {data, content} = matter(markdownWithMeta);
  const postAuthor: Author = getAuthor(data.author);
  const categories: Category[] = getPostCategories(data.categories);
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
  }
  return post;
}

const isImageCoverValid = (slug: string, image_name: any) => {
  const isImageTextValid: boolean = (typeof(image_name) === "string" && !image_name.toString().startsWith('https'))
  if(image_name === null || !isImageTextValid ){
    throw new Error(`cover_image from ${slug} is undefined/null os isn't valid`);
    
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

export const getPostsFileName = ( ): Array<string> =>{
  const files: Array<string> = readdirSync(postsFolderPath);
  return files;
}

export const getSinglePostData = (filename:string) => {
  const postData = readFileSync(join(postsFolderPath, filename), 'utf-8');
  return postData;
}

export const getFilteredPosts = (category?: Array<Category>, author?: Author): Array<Post> =>{
  const allPostsFileNames = getPostsFileName();
  const filteredPosts: Array<Post> = [];

  allPostsFileNames.map((postFile:any, index:number) =>{
    const generatedPost: Post = createPost(postFile);
    // if(category){
    //   filterByCategory(category, generatedPost)
    // }
    if(author && generatedPost.author === author){
      filteredPosts.push(generatedPost);
    }
  });
  return filteredPosts;
}

// const filterByCategory = (category: Array<Category>, post: Post ) =>{
//   post.categories.includes[category[0]]
// }
// export const haveCoverImage = (cover_image: string):boolean =>{
// //   return cover_image.includes('/default-images/');
// // }
export default Post;