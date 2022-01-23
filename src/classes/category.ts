interface Category{
    key: CategoryType;
    name: string;
    about: string;
    color: string;
    textColor: string;
    gradient: Array<string> | null;
}

export enum CategoryType {
    ART = "art" ,
    PROGRAMMING = "programming",
    RINGS = "rings",
    BLOG = "blog",
    NEXTJS =  "nextjs"
}

export default Category