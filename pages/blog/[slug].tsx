import fs from 'fs';
import path from 'path';
import React from 'react';
import NextHead from 'next/head';
// import Image from 'react'
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
// import reactImageSize  from 'react-image-size';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula,a11yDark,atomDark,dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Post, { createPost } from '../../classes/postType';
import CustomButton, {ButtonIcon} from '../../components/CustomButton';
import globalStyles from '../../styles/slug.styles';
import getImageType from '../../utils/getImageType';
import Category, { getCategories } from '../../classes/category';
import { motion } from 'framer-motion';
import {slideButtonDown, slideInUp } from '../../helpers/animations';
import Link from 'next/link';


interface IPost{post: Post};
type Params = {slug: string};
type StaticResponse = {params: Params};


const PostPage: React.FC<IPost> = ({post}: IPost) => {
    const router = useRouter()
    const doenstHaveCoverImage:boolean = post.cover_image.includes('/default-images/');
    const codeTheme: string = post.code_theme != null ? getCodeTheme(post.code_theme) : darcula
    const imageType =  getImageType(post.cover_image)
    return(
        <>
            <NextHead>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt}/>
                <meta name="author" content={post.author.name}/>
                <meta name="keywords" content="Indie Games, Development, Game, Indie, Developers, Blog"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                {
                    post.categories.map((name: Category, index:number) =>(
                        <meta name="keywords" content={name.toString().toLowerCase()} key={index}/>
                    ))
                }

                <meta property="og:type" content="blog"/>
                <meta property="og:url" content={`https://codingideas.vercel.app/blog/${post.slug}`} />
                <meta property="og:title" content={post.title}/>
                <meta property="og:site_name" content={post.title}/>
                <meta property="og:description" content={post.excerpt}/>
                <meta property="og:image" content={`${post.cover_image}`}/>
                <meta property="og:image:type" content={`image/${imageType}`} />
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="300"/>
                <meta property="og:image:alt" content="Post cover image"/> 
                
                <meta property="blog:title" content={post.title}/>
                <meta property="blog:author" content={post.author.name}/>
                <meta property="blog:published_time" content={post.date}/>
                {
                    post.categories.map((name: Category, index: number) =>(
                        <meta property="blog:tag" content={name.toString().toLowerCase()} key={index}/>
                    ))
                }

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:website" content="@nerat0"/>
                <meta name="twitter:image" content={post.cover_image}/>
                <meta name="twitter:title" content={post.title}/>
                <meta name="twitter:description" content={post.excerpt}/>
                <meta name="twitter:creator" content={post.author.twitter}/>
                <meta property="twitter:url" content={`https://codingideas.vercel.app/blog/${post.slug}`}/>
                <meta property="twitter:domain" content="codingideas.vercel.app"/>
            </NextHead>
            <style jsx global>
                {globalStyles}
            </style>
            <section className='post-section'>
                <div className='post-container'>
                    <motion.div variants={slideButtonDown}>
                        <CustomButton description='Return to Blog list' text='' icon={ButtonIcon.arrowBack} onClick={() => {router.push("/blog")}}/>
                    </motion.div>
                            
                    <motion.div variants={slideInUp} className='post-cover-div'>

                            <img
                                width='536px'height='341px'
                                alt='blog post cover' className='post-cover' 
                                src={post.cover_image}/>
                            {
                                doenstHaveCoverImage ? 
                                
                                <h1 className='post-cover-date'>{post.date}</h1>
                                : null
                            }   
                    </motion.div >

                    <motion.div variants={slideInUp}>
                        <h1 className='post-title'>{post.title}</h1>
                        <p className='post-resume'>{post.excerpt}</p>
                        <br/>
                        <div className='post-content'>
                    
                            <ReactMarkdown
                                skipHtml={false}
                                components={{
                                    img({node, className, children, ...props}){
                                        return <img alt={props.src} className='img-fit' src={`/images/posts/${post.slug}/${props.src}`}/>
                                    },
                                    a({node, className, children, ...props}){
                                        if(props.href?.startsWith('/')){
                                            return <Link href={props.href} passHref>{children[0]}</Link>
                                        }
                                        return <a target="_blank" rel="noopener noreferrer" href={props.href} >{children}</a>
                                    },
                                    code({node, inline, className, children, ...props}) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? 
                                        
                                            <SyntaxHighlighter
                                                style={codeTheme}
                                                language={post.code_language}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                         
                                        :
                                            <code className='simple-code' {...props}>
                                                {children}
                                            </code>
                                           
                                        }
                                    }}
                                    >
                                {post.content}
                            </ReactMarkdown>

                        </div>
                    </motion.div>
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
    const post: Post = createPost(`${slug}.md`);

    return {
        props:{ post } 
    };
}

const getCodeTheme = (name: string) => {
    if(name === null || name === undefined){
        return dracula;
    }
    switch (name) {
        case 'darcula': return darcula;
        case 'dracula': return dracula;
        case 'a11yDark': return a11yDark;
        case 'atomDark': return atomDark;
        default: return darcula;
    }
}
export default PostPage;