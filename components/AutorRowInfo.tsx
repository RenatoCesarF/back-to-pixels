import Author, { getAuthor } from "../classes/authorType"

interface AuthorRowInfoProps{
    authorName: string
}

const AuthorRowInfo: React.FC<AuthorRowInfoProps> = (props: AuthorRowInfoProps) =>{
    const author: Author = getAuthor(props.authorName)
    return (
    <>
        <img className="img-fit" src={author.image_path}></img>

    </>)
}

export default AuthorRowInfo