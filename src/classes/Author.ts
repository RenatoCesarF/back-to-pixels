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

export const getRoleFromString = (role: string): Role =>{
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

    var authorsKeys: string[] = [];
    authorsList.map((author: any) => {
        authorsKeys.push(author[0]);
    });

    return authorsKeys;
}

export const getRoleBackgroundColor = (role: Role): string =>{
    switch (role) {
        case Role.Developer:
            return "var(--secondary-color)";
        case Role.Designer:
            return "#582F60";//"var(--secondary-color)";
        case Role.Artist:
            return "var(--tertiary-color)";
    
        default:
            return  "var(--main-color)";
        //possible colors
        //#2F6160
        //#582F60  
        //#612F5F
        //#7ea0c6
    }
}
;


export default Author;