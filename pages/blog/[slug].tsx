import fs from 'fs'
import path from 'path'
import matter  from 'gray-matter'
import React from 'react'
import marked from 'marked'
import Post from '../../classes/postType'

interface IPost{
    post: Post
}


const PostPage: React.FC<IPost> = (post: IPost) => {

    return(
        <div>
            <h1 className="post-page-title"></h1>
            <img ref={post.post.cover_image}></img>
            <div className="post-content">
                <div dangerouslySetInnerHTML={{__html: marked(post.post.content)}}></div>
            </div>
        </div>
    )
}

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join("post"))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {paths, fallback: false}
}
export async function getStaticProps(slug: string){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const {data, content} = matter(markdownWithMeta)
      

    return{
        props:{data, slug, content}
    }
}
export default PostPage