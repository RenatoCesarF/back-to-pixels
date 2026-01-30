import ReactMarkdown, { Components, ExtraProps } from "react-markdown";
import React, { JSX } from "react";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import Post from "@classes/Post";

import transcribedLinkElement from "@components/transcribeLinkElement";
import ImageZoom from "@components/ImageZoom";
import CodeBlock from "@components/CodeBlock";
import { toTitleCase } from "@utils/toTitle";

type CodePropsFix = JSX.IntrinsicElements["code"] &
  ExtraProps & {
    inline?: boolean;
  };

interface TranscribedPostProps {
  post: Post;
}

const TranscribedPost = ({ post }: TranscribedPostProps) => {
  const components: Components = {
    img({ node, className, children, ...props }): JSX.Element {
      return (
        <ImageZoom
          src={`/posts/${post.slug}/${props.src}`}
          alt={`${props.src}`}
        />
      );
    },
    a({ node, className, children, ...props }): JSX.Element {
      return transcribedLinkElement({ node, className, children, ...props });
    },
    h1({ node, className, children, ...props }): JSX.Element {
      if (!children) return <h1>Erro</h1>;
      return (
        <h1 id={props.id} className={className}>
          {toTitleCase(children.toString())}
        </h1>
      );
    },
    h2({ node, className, children, ...props }): JSX.Element {
      if (!children) return <h2>Erro</h2>;
      return (
        <h2 id={props.id} className={className}>
          {toTitleCase(children.toString())}
        </h2>
      );
    },
    pre: (props) => {
      const child = props.children;

      if (!React.isValidElement(child)) {
        return <></>;
      }

      const childProps: any = child.props;

      return (
        <CodeBlock
          content={childProps.children}
          className={childProps.className}
        />
      );
    },

    code: ({ inline, className, children, ...props }: CodePropsFix) => {
      return (
        <code className="simple-code" {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeInlineCodeProperty]}
      skipHtml={false}
      components={components}
    >
      {post.content}
    </ReactMarkdown>
  );
};
import { visit } from "unist-util-visit";

function rehypeInlineCodeProperty() {
  /**
   * @param {import('hast').Root} tree
   * @returns {undefined}
   */
  return function (tree: any) {
    visit(tree, "code", function (node, index, parent) {
      if (parent && parent.tagName === "pre") {
        node.properties.inline = false;
      } else {
        node.properties.inline = true;
      }
    });
  };
}
export default TranscribedPost;
