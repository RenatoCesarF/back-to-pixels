import Post from "../classes/postType"

export const sortByDate = (a: Post, b: Post) =>{
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return Math.abs(dateB.getTime() - dateA.getTime())
}

export const sortByDateReverse = (a: Post, b: Post) =>{
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return Math.abs(dateA.getTime() - dateB.getTime())
}