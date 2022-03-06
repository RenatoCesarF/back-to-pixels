import Link from "next/link";
import { useRouter } from "next/router";
import Author from "../classes/authorType";
import Category from "../classes/category";
import { formateDate } from "../utils/formateDate";
import ActionIconButton, { ActionButtonIcon } from "./ActionIconButton";
import ListOfCategories from "./ListCategories";

const authorImageSize: string ="4.3em";
const instagramURL: string = "https://www.instagram.com";
const twitterURL: string = "https://www.twitter.com";

interface IPost{author: Author, publishDate: string, postSlug: string, categories: Array<Category>}


const InternPostInformation: React.FC<IPost> = (postInfo: IPost) =>{

    const redirectToInstagram = () => window.open(`${instagramURL}/${postInfo.author.instagram}/`);
    const redirectToTwitter = () => window.open(`${twitterURL}/${postInfo.author.twitter}/`);
    
    const autorRedirectLink: string = `/team/${postInfo.author.key}`;
    const formatedDate: string = formateDate(postInfo.publishDate);

    return(
        <>
            <div className="post-author-info" >
            <div style={{display: "flex", alignItems: "center"}}>
                    {/* IMAGE */}
                    <div>
                        <Link href={autorRedirectLink}>
                            <img 
                                className="post-info-author-image"
                                width={authorImageSize}
                                height={authorImageSize}
                                style={{height: authorImageSize, width: authorImageSize}}
                                alt={`${postInfo.author.name} image`}  
                                src={postInfo.author.image_path}>
                            </img>
                        </Link>
                    </div>
                    {/* NAME AND PUBLISH DATE */}
                    <div className="author-name-and-date">
                        <Link href={autorRedirectLink}>
                            <p className="post-info-author-name">{postInfo.author.name}</p>
                        </Link>
                        <p className="post-info-publish-date">{formatedDate}</p>
                    </div>
                </div>
                <div className="post-info-buttons">
                    <ActionIconButton icon={ActionButtonIcon.Instagram} onClick={redirectToInstagram}/>
                    <ActionIconButton icon={ActionButtonIcon.Twitter} onClick={redirectToTwitter}/>
                </div>
            </div>
            <div className="post-categories-info">
                <ListOfCategories categories={postInfo.categories}/>    
            </div>
        </>
    );
}

export default InternPostInformation;