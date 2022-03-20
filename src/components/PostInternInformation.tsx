import Link from "next/link";
import NextImage from 'next/image';
import { useEffect, useState } from "react";
import { m } from "framer-motion";

import Post from "@classes/Post";
import ActionIconButton, { ActionButtonIcon } from "@components/ActionIconButton";
import ListOfCategories from "@components/ListCategories";
import { opacityChange } from "@helpers/animations";
import WEBSITE_INFO from '@helpers/webSiteInfo';
import { formateDate } from "@utils/formateDate";
import copyToClipboard from "@utils/copyToClipBoard";
import { rgbDataURL } from "@utils/rgbDataURL";
import { redirectToInstagram, redirectToTwitter } from "@utils/redirect";



interface PostInternInformationProps{post: Post}

const PostInternInformation: React.FC<PostInternInformationProps> = ({post}:PostInternInformationProps) =>{    
    const [isShareApiAvailable, setIsShareApiAvailable] = useState(false);
    const shareURL: string = `${WEBSITE_INFO.URL}/blog/${post.slug}`;
    const shareText: string = `A ${WEBSITE_INFO.NAME} Blog post by ${post.author.name} - ${post.title}`;
    const autorRedirectLink: string = `/team/${post.author.key}`;
    const formatedDate: string = formateDate(post.date);
    const hasntTwitter: boolean = post.author.twitter != null || post.author.twitter == ""
    const openShareWindow = () => window.navigator.share({title:post.title,text: shareText,url:shareURL});
    const copyPostLink = () => copyToClipboard(shareURL);

    useEffect(() => {
        setIsShareApiAvailable(!!window.navigator.share);
    }, []);
    const authorImageSize: string ="69";
    return(
        <m.div variants={opacityChange}>
            <div className="post-author-info" >
            <div style={{display: "flex", alignItems: "center"}}>
                    {/* IMAGE */}
                    <div style={{marginRight: "0.6rem"}}>
                        <Link passHref href={autorRedirectLink}>
                            <NextImage
                                className="post-info-author-image"
                                layout="fixed"
                                width={authorImageSize}
                                height={authorImageSize}
                                alt={`${post.author.name} image`}  
                                src={post.author.image_path}
                                placeholder='blur'
                                loading='lazy'
                                blurDataURL={rgbDataURL(72, 81, 136)} 
                                quality={100}  
                                unoptimized={true}
                            />
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
                    <ActionIconButton icon={ActionButtonIcon.Instagram} onClick={() => redirectToInstagram(post.author.instagram)}/>
                    {hasntTwitter ? <ActionIconButton icon={ActionButtonIcon.Twitter} onClick={() => redirectToTwitter(post.author.twitter)}/> : null} 
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


export default PostInternInformation;