import Author, { getAuthor } from "@classes/Author"

interface AuthorRowInfoProps{
    authorName: string
}
const authorImageSize = "4rem"

const AuthorRowInfo: React.FC<AuthorRowInfoProps> = (props: AuthorRowInfoProps) =>{
    const author: Author = getAuthor(props.authorName)

    return (
        <div style={{display: "inline-flex"}}>
            <img 
                width={authorImageSize}
                height={authorImageSize}      
                alt={`${author.name} image`}  
                style={{width: authorImageSize, height: authorImageSize}} 
                className="img-fit author-tooltip-img" src={author.image_path}>
            </img>
            <div className="author-tooltip-role">
                {
                    author.roles.map((name: string, index: number) =>{
                        return <p key={index} >{name}<br/></p>
                    })
                }
            </div>
    

        </div>
    )
}

export default AuthorRowInfo