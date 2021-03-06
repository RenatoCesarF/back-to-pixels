import { readdirSync, readFileSync } from 'fs';
import {join} from 'path';
import Author, { getAuthor } from '@classes/Author'
import Category, { getPostCategories, isCategoriesInCategories } from '@classes/category'
import { sortByCategoryAmount, sortByDate } from '@utils/sort';
import { descontructMdData } from '@utils/descontructMdData';

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
export const getAllPostsSortedByDate = (): Post[] => {
  const files = getPostsFileName();
  
  var posts: Post[] = files.map(filename => {
    return createPost(filename);
  });

  posts = posts.sort(sortByDate);
  return posts
}

export const createPost = (filename: string): Post => {
  const slug: string = filename.replace('.md', '');
  const markdown = getSinglePostData(filename);
  const {data, content} = descontructMdData(markdown)
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

export const getCoverImage = (slug: string, cover_image:string | number) =>{
  if(typeof(cover_image) === "number" || !isCoverImageValid(slug, cover_image)){
    return getRandomDefaultImage()
  }
  return `/images/posts/${slug}/${cover_image}.webp`;   
}
const getRandomDefaultImage = (imageNumber?: number) =>{
  var defaultImageIndex = imageNumber || Math.floor(Math.random() * 4) + 1;
  return `/images/posts/default-images/${defaultImageIndex}.webp`;
}

const isCoverImageValid = (slug: string, cover_image: string | number) => {
  const startsWithHTTPS = cover_image.toString().startsWith('https')

  // if does not start with https and is a string, it is valid
  const isImagePathValid: boolean = typeof(cover_image) === "string" && !startsWithHTTPS
  if(cover_image === null || !isImagePathValid ){
    throw new Error(`cover_image from ${slug} is undefined/null os isn't valid`); 
  }

  var imageExistInFolder = false;    
  const images: string[] = readdirSync(join(`public/images/posts/${slug}`));

  for(let image of images) {
    if(image.replace('.webp', '') === cover_image){
      imageExistInFolder = true;
      break;
    }
  }
  return imageExistInFolder;
}

export const getPostsFileName = ( ): string[] =>{
  const files: string[] = readdirSync(postsFolderPath);
  return files;
}

export const getSinglePostData = (filename:string) => {
  const postData = readFileSync(join(postsFolderPath, filename), 'utf-8');
  return postData;
}

export const getPostRecomendations = (mainPost: Post) =>{
  const allCreatedPosts: Post[] = getPostsFileName().map((file) => createPost(file));
  allCreatedPosts.sort(sortByDate);

  var comparedCategories: Category[] = [... mainPost.categories];
  let postsWithSameCategories: Post[] = [];

  for(let i: number = 0;postsWithSameCategories.length < 3 || i < 5; i+=1){
    allCreatedPosts.map((post: Post) => {
      if(post.slug === mainPost.slug) return;
      if(isPostInArray(post, postsWithSameCategories)) return;
      if(!isCategoriesInCategories(comparedCategories, post.categories)) return;

      postsWithSameCategories.push(post);        
    });
    
    comparedCategories.pop();
  }
  return postsWithSameCategories.sort(sortByCategoryAmount).slice(0,3);
}

const isPostInArray = (post: Post, array: Post[]): boolean => {
  let isInArray: boolean = false;
  array.some(element => {
    if (element.slug === post.slug) {
      isInArray = true;
    }
  });
  return isInArray;
}

export const filterPostsByCategory = (category:Category): Post[] =>{
  const allPostsFileNames = getPostsFileName();
  const filteredPosts: Post[] = [];

  allPostsFileNames.map((postFile:any, index:number) =>{
    const generatedPost: Post = createPost(postFile);

    if(generatedPost.categories.includes(category)) {
      filteredPosts.push(generatedPost);
    }

  });
  return filteredPosts;
}

export const filterPostsByAuthor = (author: Author): Post[] =>{
  const allPostsFileNames = getPostsFileName();
  const filteredPosts: Post[] = [];

  allPostsFileNames.map((postFile:any, index:number) =>{
    const generatedPost: Post = createPost(postFile);
    if(author && generatedPost.author === author){
      filteredPosts.push(generatedPost);
    }
  });
  
  return filteredPosts;
}

export default Post;