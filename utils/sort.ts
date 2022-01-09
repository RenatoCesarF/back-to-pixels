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