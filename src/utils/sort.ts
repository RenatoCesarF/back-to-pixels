import { CategoryType } from "@classes/category";
import Post from "@classes/Post";

export const sortByDate = (a: any, b: any) =>{
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);

    return dateB.valueOf() - dateA.valueOf();
}
export const sortByCategoryAmount = (a: Post, b: Post) =>{
    return b.categories.length - a.categories.length; 
}

export const sortByDateReverse = (a: any, b: any) =>{
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA.valueOf() - dateB.valueOf();
}

export const sortByCategoryImportance =(a: any, b: any) =>{
    const valueA: number = Number(CategoryType[a.key.toUpperCase()]);
    const valueB: number = Number(CategoryType[b.key.toUpperCase()]);
    return valueB - valueA;
}