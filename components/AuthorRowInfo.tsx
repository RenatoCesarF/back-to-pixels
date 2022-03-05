import Author, { getAuthor } from "../classes/authorType"

interface AuthorRowInfoProps{
    authorName: string
}
const authorImageSize = "70px"

const AuthorRowInfo: React.FC<AuthorRowInfoProps> = (props: AuthorRowInfoProps) =>{
    const author: Author = getAuthor(props.authorName)

    return (
        <div style={{display: "inline-flex"}}>
            <img 
                width={authorImageSize}
                height={authorImageSize}
                alt={`${author.name} image`}  
                style={{clipPath: "circle(50% at 50% 50%", width: authorImageSize, height: authorImageSize}} 
                className="img-fit" src={author.image_path}>
            </img>
            <div className="author-tooltip-role">
                {
                    author.roles.map((name: string) =>{
                        return <p >{name}<br/></p>
                    })
                }
            </div>
    

        </div>
    )
}

export default AuthorRowInfo