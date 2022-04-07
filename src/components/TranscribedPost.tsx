
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from 'react';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkSlug from 'remark-slug';

import { getAuthorsKeyList } from '@classes/Author';
import Post from '@classes/Post';

import ImageZoom from '@components/ImageZoom';
import AuthorRowInfo from '@components/AuthorRowInfo'
import CodeBlock from '@components/CodeBlock';

const BaseHoverInfo = dynamic(() => import('@components/BaseHoverInfo'));

interface TranscribedPostProps{post: Post}

const TranscribedPost = ({post}: TranscribedPostProps) =>{
    return(
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkSlug]} 
            rehypePlugins={[rehypeRaw]} 
            skipHtml={false}
            components={{
                img({node, className, children, ...props}): JSX.Element{
                    return <ImageZoom 
                                src={`/images/posts/${post.slug}/${props.src}`} 
                                alt={`${props.src}`}
                            />
                },
                a({node, className, children, ...props}): JSX.Element{
                    const linkElement = <a target="_blank" rel="noopener noreferrer" href={props.href} >{children}</a>
                    const isInternLink = props.href?.startsWith('#') || props.href?.startsWith('/');

                    if(!children[0] || !isInternLink){
                        return linkElement;
                    }
                
                    const isAuthor = getAuthorsKeyList().includes(children[0].toString().toLowerCase());
                    return(
                        <Link href={props.href || "/blog"} passHref scroll> 
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
                code({node, inline, className, children, ...props}): JSX.Element {
    
                    return !inline ? 
                        <CodeBlock content={children} className={className}/>
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


export default TranscribedPost;