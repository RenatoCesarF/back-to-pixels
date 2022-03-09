const authorsInfo = require('../authorsInfo.json');

type Author ={
    key: string,
    name: string,
    email: string,
    roles: Array<string>
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

export const getAuthorRoleIndex = (role: string) =>{
    switch (role) {
        case 'Programmer':
            return 0;                
        case 'Artist':
            return 1;                
        case 'Designer':
            return 2;                
        default:
            return 0;
    }
}

export const getAuthorsList = () =>{
    const authorsList = Object.entries(authorsInfo);
    return authorsList;
}

export const getAuthorsKeyList = () => {
    const authorsList = getAuthorsList();

    var authorsKeys: Array<string> = [];
    authorsList.map((author: any) => {
        authorsKeys.push(author[0]);
    });

    return authorsKeys;
}

export default Author;