
import ReactMarkdown from 'react-markdown';
import React from 'react';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkSlug from 'remark-slug';

import Post from '@classes/Post';

import transcribedLinkElement from '@components/transcribeLinkElement';
import ImageZoom from '@components/ImageZoom';
import CodeBlock from '@components/CodeBlock';
import { toTitleCase } from '@utils/toTitle';


interface TranscribedPostProps { post: Post }

const TranscribedPost = ({ post }: TranscribedPostProps) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkSlug]}
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
            components={{
                img({ node, className, children, ...props }): JSX.Element {
                    return <ImageZoom
                        src={`/posts/${post.slug}/${props.src}`}
                        alt={`${props.src}`}
                    />
                },
                a({ node, className, children, ...props }): JSX.Element {
                    return transcribedLinkElement({ node, className, children, ...props })
                },
                h1({ node, className, children, ...props }): JSX.Element {
                    return <h1 id={props.id} className={className}>{toTitleCase(children.toString())}</h1>
                },
                h2({ node, className, children, ...props }): JSX.Element {
                    return <h2 id={props.id} className={className}>{toTitleCase(children.toString())}</h2>
                },
                code({ node, inline, className, children, ...props }): JSX.Element {

                    return !inline ?
                        <CodeBlock content={children} className={className} />
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