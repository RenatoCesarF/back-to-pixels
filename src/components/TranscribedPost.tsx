
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NextImage  from 'next/image';
import React from 'react';
import { useRef } from 'react';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula,a11yDark,atomDark,dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkSlug from 'remark-slug';

import { getAuthorsKeyList } from '@classes/authorType';
import Post from '@classes/postType';

import ImageZoom from '@components/ImageZoom';
import AuthorRowInfo from '@components/AuthorRowInfo'

const BaseHoverInfo = dynamic(() => import('@components/BaseHoverInfo'));




interface TranscribedPostProps{post: Post}

const TranscribedPost = ({post}: TranscribedPostProps) =>{
    const codeTheme: string = getCodeTheme(post.code_theme);
    return(
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkSlug]} 
            rehypePlugins={[rehypeRaw]} 
            skipHtml={false}
            components={{
                input({node, className, children, ...props}){
                    return (
                        <label className='cb-container'>
                            <span className='cb-content'>{children}</span>
                            <input  {...props}></input>
                            <span className='checkmark'></span>
                        </label>
                    );
                },
                img({node, className, children, ...props}){
                    return <ImageZoom 
                                src={`/images/posts/${post.slug}/${props.src}`} 
                                alt={`${props.src}`}
                            />
                },
                a({node, className, children, ...props}){
                    const linkElement = <a target="_blank" rel="noopener noreferrer" href={props.href} >{children}</a>
                    const isInternLink = props.href?.startsWith('#') || props.href?.startsWith('/');

                    if(!children[0] || !isInternLink){
                        return linkElement;
                    }
                
                    const isAuthor = getAuthorsKeyList().includes(children[0].toString().toLowerCase());
                    return(
                        <Link href={props.href || "/blog"} passHref={true}> 
                        {
                            isAuthor?

                                <div style={{ display: "contents", position: "relative"}}>
                                    <BaseHoverInfo displayedText={children[0].toString()}>
                                        <AuthorRowInfo authorName={children[0].toString()}/>
                                    </BaseHoverInfo>
                                </div>    
                            :
                                <a style={{"border": "none"}}>{children}</a>
                        }
                        </Link>
                    );
                },
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? 
                    
                        <SyntaxHighlighter
                            style={codeTheme}
                            language={match[1]}
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
    )
}

const getCodeTheme = (name: string = 'dracula') => {
    if(name === null || name === undefined){
        return dracula;
    }
    switch (name) {
        case 'darcula': return darcula;
        case 'dracula': return dracula;
        case 'a11yDark': return a11yDark;
        case 'atomDark': return atomDark;
    }
}

export default TranscribedPost;