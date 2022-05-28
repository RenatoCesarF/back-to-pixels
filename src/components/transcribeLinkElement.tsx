import Link from "next/link";

export default function transcribedLinkElement({node, className, children, ...props}: any): JSX.Element {
    const linkElement = <a target="_blank" 
                           className="transcribe-link"
                           rel="noopener noreferrer"
                           href={props.href}
                        >
                            {children}
                        </a>
    const isInternLink = props.href?.startsWith('#') || props.href?.startsWith('/');

    if(!children[0] || !isInternLink){
        return linkElement;
    }

    return(
        <Link href={props.href || "/blog"} passHref scroll> 
            <a style={{"border": "none"}} className="transcribe-link">{children}</a>
        </Link>
    );
}
