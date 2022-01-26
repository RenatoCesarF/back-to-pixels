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

export const getCoverImage = (slug: string, cover_image:string) =>{
    var coverImage = `https://codingideas.vercel.app/images/posts/defaultImages/1.webp`;

    if(cover_image){
      if(cover_image.startsWith('https')){
        throw new Error("Cover image doens't need to be online, just past it in the images/post folder and declare it's name (without type) in the .md file");
      }
      coverImage = `https://codingideas.vercel.app/images/posts/${slug}/${cover_image}.webp`;
    } 
    return coverImage;
    
}