const authorsInfo = require('@helpers/authorsInfo.json');


type Author ={
    key: string,
    name: string,
    email: string,
    roles: string[]
    image_path: string,
    about: string,
    twitter: string,
    instagram: string,
}

export const getAuthor = (authorKey: string): Author => {
    authorKey = authorKey.toString().toLowerCase();
    var authorInfo: Author  = authorsInfo[authorKey];

    if(!authorInfo || authorInfo === undefined || authorInfo === null){
        throw new Error(`Author [${authorKey}] is null, undefined or invalid`);
    }
  
    return authorInfo;
}

export const getAuthorsKeyList = () => {
    const authorsList = getAuthorsList();

    var authorsKeys: string[] = [];
    authorsList.map((author: any) => {
        authorsKeys.push(author[0]);
    });

    return authorsKeys;
}

export const getAuthorsList = () =>{
    const authorsList = Object.entries(authorsInfo);
    return authorsList;
}

export default Author;