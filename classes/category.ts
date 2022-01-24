interface Category{
    key: CategoryType;
    name: string;
    about: string;
    color: string;
    textColor: string;
    gradient: Array<string> | null;
}

export enum CategoryType {
    RINGS = "rings",
    ART = "art" ,
    BLOG = "blog",
    NEXTJS =  "nextjs",
    DESIGN = "design",
    PROGRAMMING = "programming",
    TRANSPARENT = 'transparent'
}

export default Category