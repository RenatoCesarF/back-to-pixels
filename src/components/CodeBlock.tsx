import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, a11yDark, atomDark, dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  content: any,
  className?: string,
}
const CodeBlock: React.FC<CodeBlockProps> = ({ content, className }: CodeBlockProps) => {
  const codeTheme = getCodeTheme()
  const match = /language-(\w+)/.exec(className || '') || "none"
  return (
    <SyntaxHighlighter
      style={codeTheme}
      language={match[1]}
      PreTag="div"
      showLineNumbers={true}
      customStyle={{ paddingLeft: "0px" }}
    // {...props}
    >
      {String(content).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
}

const getCodeTheme = (name: string = 'dracula') => {
  if (name === null || name === undefined) {
    return dracula;
  }
  switch (name) {
    case 'darcula': return darcula;
    case 'dracula': return dracula;
    case 'a11yDark': return a11yDark;
    case 'atomDark': return atomDark;
  }
}

export default CodeBlock;
