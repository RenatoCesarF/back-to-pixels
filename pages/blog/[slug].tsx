import fs from 'fs'
import path from 'path'
import matter  from 'gray-matter'
import React from 'react'
import {marked} from 'marked'
import Post from '../../classes/postType'

interface IPost{post: Post}
type Params = {slug: string}
type StaticResponse = {params: Params}

const PostPage: React.FC<IPost> = ({post}: IPost) => {
    return(
        <section>

            <div className='post-container'>
                <img className='post-cover'src={post.cover_image}></img>
                <h1 className='post-title'>{post.title}</h1>
                <div className='post-content'>
                    <div className='post-parsed-md' dangerouslySetInnerHTML={{__html: marked.parse(post.content)}}></div>
                </div>
            </div>
        </section>
    )
}

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {paths, fallback: false}
}

export async function getStaticProps(object: StaticResponse ){
    const slug: string = object.params.slug
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const {data, content} = matter(markdownWithMeta)
      

    const post: Post = {
        slug, 
        content,
        author: data.author,
        cover_image: data.cover_image,
        categories: data.categories,
        date:data.date,
        excerpt: data.excerpt, 
        title: data.title
    }
    return {
        props:{ post } 
    } 
}

export default PostPage