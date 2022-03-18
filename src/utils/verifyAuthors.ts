import Author, {getAuthor} from "@classes/Author";
import isValid from "./isValid";



const isAuthorValid  = (authorKey: string): boolean =>{
    const author: Author = getAuthor(authorKey);

    // NAME
    if(!isValid(author.name)){ 
        throw new Error(`Author ${authorKey} | name is undefined or null`);
    }
    if(author.name.length <= 2){
        throw new Error(`Author ${authorKey} | name is too short`);
    }
    // ABOUT
    if(!isValid(author.about)){
        throw new Error(`Author ${authorKey} | about is undefined or null`);
    }
    // EMAIL
    if(!isValid(author.email)){
        throw new Error(`Author ${authorKey} | email is undefined or null`);
    }
    if(!author.email.includes("@") || !author.email.includes(".com")){
        throw new Error(`Author ${authorKey} | email is invalid`);
    }
    
    if(!isValid(author.image_path)){
        throw new Error(`Author ${authorKey} | image_path is undefined or null`);
    }
    if(!author.image_path.includes(".webp")){
        throw new Error(`Author ${authorKey} | Author image_path need to be a webp file`);
    }


    return true;
}


export default isAuthorValid;