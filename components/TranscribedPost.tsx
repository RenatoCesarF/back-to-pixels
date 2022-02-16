import Link from "next/link"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import remarkGfm from "remark-gfm"
import {darcula,a11yDark,atomDark,dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Post from "../classes/postType"
import ImageZoom from "./ImageZoom"


interface TranscribedPostProps{post: Post}

const TranscribedPost: React.FC<TranscribedPostProps> = ({post}: TranscribedPostProps): JSX.Element =>{
    const codeTheme: string = getCodeTheme(post.code_theme);
    return(
        <ReactMarkdown
            remarkPlugins={[remarkGfm]} 
            components={{
                input({node, className, children, ...props}){
                    return (
                        <label className='cb-container'>
                            <span className='cb-content'>{children}</span>
                            <input  {...props}></input>
                            <span className='checkmark'></span>
                        </label>
                    ) 
                },
                img({node, className, children, ...props}){
                    return <ImageZoom 
                                src={`/images/posts/${post.slug}/${props.src}`} 
                                alt={`${props.src}`}
                                className='img-fit'
                            />
                },
                a({node, className, children, ...props}){
                    const linkElement = <a target="_blank" rel="noopener noreferrer" href={props.href} >{children}</a>

                    if(props.href?.startsWith('/') || props.href?.startsWith('#')){
                        return (
                            <Link href={props.href} passHref={true}> 
                                <a style={{"border": "none"}}>{children}</a>
                            </Link>
                        )
                    }
                    return linkElement
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
        default: return dracula;
    }
}

export default TranscribedPost;