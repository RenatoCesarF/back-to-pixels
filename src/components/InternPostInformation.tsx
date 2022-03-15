import Link from "next/link";
import { useEffect, useState } from "react";
import { m } from "framer-motion";

import Post from "@classes/postType";
import ActionIconButton, { ActionButtonIcon } from "@components/ActionIconButton";
import ListOfCategories from "@components/ListCategories";
import { opacityChange } from "@helpers/animations";
import WEBSITE_INFO from '@helpers/webSiteInfo';
import { formateDate } from "@utils/formateDate";
import copyToClipboard from "@utils/copyToClipBoard";

const authorImageSize: string ="4.3em";
const instagramURL: string = "https://www.instagram.com";
const twitterURL: string = "https://www.twitter.com";

interface InternPostInformationProps{post: Post}


const InternPostInformation: React.FC<InternPostInformationProps> = ({post}:InternPostInformationProps) =>{    
    const [isShareApiAvailable, setIsShareApiAvailable] = useState(false);
    const shareURL: string = `${WEBSITE_INFO.DEFAULT_URL}/blog/${post.slug}`;
    const shareText: string = `A ${WEBSITE_INFO.NAME} Blog post by ${post.author.name} - ${post.title}`;
    const autorRedirectLink: string = `/team/${post.author.key}`;
    const formatedDate: string = formateDate(post.date);
    const hasntTwitter: boolean = post.author.twitter != null || post.author.twitter == ""

    const redirectToInstagram = () => window.open(`${instagramURL}/${post.author.instagram}/`);
    const redirectToTwitter = () => window.open(`${twitterURL}/${post.author.twitter}/`);
    const openShareWindow = () => window.navigator.share({title:post.title,text: shareText,url:shareURL});
    const copyPostLink = () => copyToClipboard(shareURL);


    useEffect(() => {
        setIsShareApiAvailable(!!window.navigator.share);
    }, []);

    return(
        <m.div variants={opacityChange}>
            <div className="post-author-info" >
            <div style={{display: "flex", alignItems: "center"}}>
                    {/* IMAGE */}
                    <div>
                        <Link passHref href={autorRedirectLink}>
                            <img 
                                className="post-info-author-image"
                                width={authorImageSize}
                                height={authorImageSize}
                                style={{height: authorImageSize, width: authorImageSize}}
                                alt={`${post.author.name} image`}  
                                src={post.author.image_path}>
                            </img>
                        </Link>
                    </div>
                    {/* NAME AND PUBLISH DATE */}
                    <div className="author-name-and-date">
                        <Link href={autorRedirectLink} passHref>
                            <p className="post-info-author-name">{post.author.name}</p>
                        </Link>
                        <p className="post-info-publish-date">{formatedDate}</p>
                    </div>
                </div>
                <div className="post-info-buttons">
                    <ActionIconButton icon={ActionButtonIcon.Instagram} onClick={redirectToInstagram}/>
                    {hasntTwitter ? <ActionIconButton icon={ActionButtonIcon.Twitter} onClick={redirectToTwitter}/> : null} 
                    {isShareApiAvailable ? 
                        <ActionIconButton icon={ActionButtonIcon.Share} onClick={openShareWindow}/> 
                        : null
                    }
                    <ActionIconButton icon={ActionButtonIcon.Copy} onClick={copyPostLink}/>
                </div>
            </div>
            <div className="post-categories-info">
                <ListOfCategories categories={post.categories}/>    
            </div>
        </m.div>
    );
}


export default InternPostInformation;