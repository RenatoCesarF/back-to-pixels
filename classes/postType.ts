import Author from './authorType'
import Category from './category'

type Post = {
    author: Author,
    content: string,
    cover_image: string
    categories: Category[]
    date: string,
    excerpt: string,
    slug: string,
    title: string,
}

export default Post;