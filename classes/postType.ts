import Author from './authorType'
import Category, { CategoryType } from './category'

type Post = {
    author: Author,
    content: string,
    cover_image: string
    categories: CategoryType[]
    date: string,
    excerpt: string,
    slug: string,
    code_theme: string, // need to create a type that store these values
    title: string,
}

export default Post;