import Category, { CategoryType } from "../classes/category";
import Post from "../classes/postType"

export const sortByDate = (a: Post, b: Post) =>{
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);

    return dateB.valueOf() - dateA.valueOf();
}

export const sortByDateReverse = (a: Post, b: Post) =>{
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA.valueOf() - dateB.valueOf();
}

export const sortByCategoryImportance =(a: any, b: any) =>{
    const valueA: number = Number(CategoryType[a.key.toUpperCase()]);
    const valueB: number = Number(CategoryType[b.key.toUpperCase()]);
    return valueB - valueA;
}