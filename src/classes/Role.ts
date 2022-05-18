export enum Role {
    Everyone = "Everyone",
    Developer = "Developer",
    Designer = "Designer",
    Artist = "Artist"
}

export const getRoleFromString = (role: string): Role =>{
    switch (role) {
        case 'Developer':
            return Role.Developer;                
        case 'Artist':
            return Role.Artist;                
        case 'Designer':
            return Role.Designer;
        case 'Everyone':
            return Role.Everyone;                
        
        default:
            throw new Error(`Undefined or invalid role ${role}`);
    }
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