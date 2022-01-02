import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import PostCard from '../components/PostCard'
import Post from '../classes/postType'


interface PostList{
  posts: Post[]
}

export default function BlogPage(posts:PostList ){
    return (
        <div>
            <h1>Posts</h1>
            <div className='posts-grid'>
            {
              posts.posts.map((post: Post, index: number) =>(
                <PostCard post={post} key={index}/>
              ))
            }
            </div>
        </div>
    )
}


export async function getStaticProps(){
    const files = fs.readdirSync(path.join('posts'))
  
    const posts: Post[] = files.map(filename => {
      const slug: string = filename.replace('.md', '')
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
      const {data, content} = matter(markdownWithMeta)
      
      return {
        slug, 
        content,
        author: data.author,
        cover_image: data.cover_image,
        categories: data.categories,
        date:data.date,
        excerpt: data.excerpt, 
        title: data.title
      }

    })  
    
    return {
      props:{ posts } 
    } 
  
}