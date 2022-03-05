import { getAuthor } from "../classes/authorType"
import Post from "../classes/postType"

interface IPost{post: Post}

const InternPostInformation: React.FC<IPost> = ({post}: IPost) =>{
    

    return(
        <>
            <div className="post-author-info" style={{display: "inline"}}>
                <div className="author-name-and-date">
                
                </div>
                <div className="author-name-and-date">
                
                </div>
            </div>
            <div className="post-categories-info"></div>
        </>
    )
}

export default InternPostInformation