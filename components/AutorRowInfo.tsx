import Author, { getAuthor } from "../classes/authorType"

interface AuthorRowInfoProps{
    authorName: string
}

const AuthorRowInfo: React.FC<AuthorRowInfoProps> = (props: AuthorRowInfoProps) =>{
    const author: Author = getAuthor(props.authorName)
    return (
    <>
        <img  style={{clipPath: "circle(50% at 50% 50%"}}className="img-fit" src={author.image_path}></img>

    </>)
}

export default AuthorRowInfo