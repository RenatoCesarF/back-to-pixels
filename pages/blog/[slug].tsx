import fs from 'fs'
import path from 'path'
import matter  from 'gray-matter'
import Post from '../../classes/postType'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism'


interface IPost{post: Post}
type Params = {slug: string}
type StaticResponse = {params: Params}


const PostPage: React.FC<IPost> = ({post}: IPost) => {
    const hasCoverImage:boolean = post.cover_image != undefined || post.cover_image != null
    return(
        <section className='post-section'>
            <div className='post-container'>

            {
                hasCoverImage ? 
                (<img className='post-cover'src={post.cover_image}/>)
                : 
                (
                    <div className='post-cover-div'>        
                        <h1 className='post-cover-date'>{post.date}</h1>
                    </div>
                )
            }
                <h1 className='post-title'>{post.title}</h1>
                <br/>
                <div className='post-content'>
                <ReactMarkdown
                    skipHtml={false}
                    children={post.content}
                    components={{
                        img({node, className, children, ...props}){
                            return <img className='img-fit' src={props.src} ></img>
                        },
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            console.log(match);
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={darcula}
                                    language='python'
                                    PreTag="div"
                                    {...props}
                                />
                                  ) : (
                                    <code className={className} {...props}>
                                      {children}
                                    </code>
                                  )
                                }
                        }
                           
                    }
                />
                </div>
            </div>
        </section>
    )
};

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