import Category from "../classes/category";
import Post from "../classes/postType";


export const isPostValid = (post: Post) =>{
  
  // Date
  if(!post.date || post.date === null){
    throw new Error(`Post ${post.slug} | Post date is null or undefined`);
  }
  //verify if it's able to create a Date var 
  
  verifyTitle(post);
  verifyExcerpt(post);
  verifyCoverImage(post);
  verifyPostCategories(post);
  verifyPostAuthor(post);

  return true;

}
const verifyTitle = (post: Post) =>{
  if(!post.title || post.title.length < 5){
    throw new Error(`Post ${post.slug} | Title null or too short`);
  }
  if(post.title.length >= 50){
    throw new Error(`Post ${post.slug} | Post tittle is too long`);
  }
}

const verifyExcerpt = (post: Post) =>{
  if(!post.excerpt || post.excerpt === null){
    throw new Error(`Post ${post.slug} | Post excerpt can not be null`);
  }
  if(post.excerpt.length <= 10){
    throw new Error(`Post ${post.slug} | Post excerpt is too short, at least 10 characters`);
  }
}

const verifyCoverImage = (post: Post) =>{
  if(!post.cover_image || post.cover_image === null){
    throw new Error(`Post ${post.slug} | Post cover_image can not be null. Choose a number or a image inside the post folder`); 
  }
  if(!post.cover_image.includes('.webp')){
    throw new Error(`Post ${post.slug} | Post cover image is not in the right format. It needs to be .webp format`);
  }
  // var img =  new Image();
  // img.src = post.cover_image;
  // if(img.width < 500 || img.height < 300){
  //   throw new Error(`Post ${post.slug} | Post image file need to be at leas 500px of height and 300px of width`);
  // }
}

const verifyPostCategories = (post: Post) =>{
  if(!post.categories || post.categories === null){
    throw new Error(`Post ${post.slug} | Post categories cannnot be undefined or null`);
  }
  if(post.categories.length === 0){
    throw new Error(`Post ${post.slug} | The post need to have at least one category.`);
  }

  post.categories.forEach((category: Category) => {
    if(category === undefined || category === null){
      throw new Error(`Post ${post.slug} | Categories cannot be null or undefined `);
    }
  });
}

const verifyPostAuthor = (post: Post) =>{
  if(!post.author || post.author === null || post.author === undefined){
    throw new Error("Post author cannnot be undefined or null");
  }
}