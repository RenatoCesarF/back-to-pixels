const authorsInfo = require('@helpers/authorsInfo.json');

export enum Role {
    Everyone = "Everyone",
    Developer = "Developer",
    Designer = "Designer",
    Artist = "Artist"
}


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

export const roleFromString = (role: string): Role =>{
    switch (role) {
        case 'Developer':
            return Role.Developer;                
        case 'Artist':
            return Role.Artist;                
        case 'Designer':
            return Role.Designer
        case 'Everyone':
            return Role.Everyone;                
        
        default:
            throw new Error(`Undefined or invalid role ${role}`);
            
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