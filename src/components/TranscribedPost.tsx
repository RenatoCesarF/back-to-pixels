
import ReactMarkdown, { Components, ExtraProps } from 'react-markdown';
import React, { JSX } from 'react';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import Post from '@classes/Post';

import transcribedLinkElement from '@components/transcribeLinkElement';
import ImageZoom from '@components/ImageZoom';
import CodeBlock from '@components/CodeBlock';
import { toTitleCase } from '@utils/toTitle';

type CodePropsFix = JSX.IntrinsicElements["code"] &
  ExtraProps & {
    inline?: boolean;
  };

interface TranscribedPostProps { post: Post }

const TranscribedPost = ({ post }: TranscribedPostProps) => {
  const components: Components = {
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
      if (!children) return <h1>Erro</h1>
      return <h1 id={props.id} className={className}>{toTitleCase(children.toString())}</h1>
    },
    h2({ node, className, children, ...props }): JSX.Element {
      if (!children) return <h2>Erro</h2>
      return <h2 id={props.id} className={className}>{toTitleCase(children.toString())}</h2>
    },
    code: ({ inline, className, children, ...props }: CodePropsFix) => {
      if (inline) {
        return (
          <code className="simple-code" {...props}>
            {children}
          </code>
        );
      } else {
        return <div className="code-block-wrapper">
          <CodeBlock content={children} className={className} />
        </div>
      }
    },
  }
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      skipHtml={false}
      components={components}
    >
      {post.content}
    </ReactMarkdown >
  )
}


export default TranscribedPost;
