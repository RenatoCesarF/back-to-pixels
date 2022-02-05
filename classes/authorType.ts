const authorsInfo = require('../public/authorsInfo.json');

type Author ={
    key: string,
    name: string,
    email: string,
    role: string
    image_path: string,
    about: string,
    twitter: string,
    instagram: string,
}

export const getAuthor = (authorKey: string): Author => {
    authorKey = authorKey.toString().toLowerCase();
    var authorInfo: Author  = authorsInfo[authorKey];

    if(!authorInfo || authorInfo === undefined || authorInfo === null){
        throw new Error("Author is null, undefined or invalid");
    }
  
    const author: Author = authorInfo
    return author;
}

export const getAuthorsList = () =>{
    const authorsList = Object.entries(authorsInfo);
    return authorsList;
}

export default Author;