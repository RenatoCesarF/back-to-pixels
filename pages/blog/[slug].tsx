import fs from 'fs';
import path from 'path';
import matter  from 'gray-matter';
import Post from '../../classes/postType';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula,a11yDark,atomDark,dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import globalStyles from '../../styles/post.styles';

interface IPost{post: Post};
type Params = {slug: string};
type StaticResponse = {params: Params};


const getCodeTheme = (name: string) => {
    if(name === null || name === undefined){
        return dracula;
    }
    switch (name) {
        case 'darcula':
            return darcula;
        case 'dracula':
            return dracula;
        case 'a11yDark':
            return a11yDark;
        case 'atomDark':
            return atomDark;
        default:
            return dracula;
    }
}

const PostPage: React.FC<IPost> = ({post}: IPost) => {
    const hasCoverImage:boolean = post.cover_image != undefined || post.cover_image != null;
    const codeTheme: string = getCodeTheme(post.code_theme);
    return(
        <>
            <style jsx global>
            {globalStyles}
            </style>
            <section className='post-section'>
                <div className='post-container'>

                {
                    hasCoverImage ? 
                    (<img  className='post-cover'src={post.cover_image}/>)
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
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={codeTheme}
                                        language='python'
                                        PreTag="div"
                                        {...props}
                                    />
                                    ) : (
                                        <code className='simple-code' {...props}>
                                        {children}
                                        </code>
                                    )
                            }
                            }
                            
                        }
                    />
                    {/* <div className='post-parsed-md' dangerouslySetInnerHTML={{__html: marked.parse(post.content)}}></div> */}
                    </div>
                </div>
            </section>
        </>
    )
};

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));

    return {paths, fallback: false};
}

export async function getStaticProps(object: StaticResponse ){
    const slug: string = object.params.slug;
    if(!slug || slug === null || slug === undefined){
        throw new Error("Slug was not defined, define it inside the .md file");
    }
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
    const {data, content} = matter(markdownWithMeta);

      

    const post: Post = {
        slug, 
        content,
        author: data.author ?? null,
        cover_image: data.cover_image ?? null,
        categories: data.categories ?? null,
        date:data.date ?? null,
        excerpt: data.excerpt ?? null, 
        title: data.title ?? null,
        code_theme: data.code_theme ?? null
    };
    return {
        props:{ post } 
    };
}

export default PostPage;