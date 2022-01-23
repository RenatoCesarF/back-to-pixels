import React, { useState } from 'react';
import Link from 'next/link';

import Post from '../classes/postType';
import {FaCalendarAlt,FaRegCalendarAlt} from 'react-icons/fa';
import { m } from 'framer-motion';
import { cardVariants } from '../helpers/animations';

interface IPost{
    post: Post
}
const maximumExcerptSize: number = 70;

const PostCard: React.FC<IPost> = ({post}: IPost) => {
    const [isHovering, setIsHovering] = useState(false);
    const hasCoverImage:boolean = post.cover_image != undefined || post.cover_image != null;
    var shortExcerpt: string = post.excerpt;
    if(post.excerpt.length > maximumExcerptSize){
        shortExcerpt = post.excerpt.substring( 0, maximumExcerptSize) + "...";
    }

    return(
        <Link passHref href={`/blog/${post.slug}`}>
            <m.div 
                className='post-card-div' 
                variants={cardVariants}

                onMouseOver={()=>{setIsHovering(true)}}
                onMouseLeave={()=>{setIsHovering(false)}}
                onTouchStart={()=>{setIsHovering(true)}}
                onTouchEnd={()=>{setIsHovering(false)}}>
                    
                    <div className='post-card-image-container'>
                        {
                            hasCoverImage ? 
                            (<img className='post-card-img' alt='post card image' src={post.cover_image}/>)
                            : 
                            (<h1 className='post-card-cover-date'>{post.date}</h1>)
                        }
                    </div>

                    <h2 className='post-card-title'>{post.title}</h2>

                    <div className='post-card-container'>
                        <div className='excerpt-post-card-div'>
                            <p className='post-card-resume' >
                                {isHovering ? post.excerpt : shortExcerpt}
                            </p>
                        </div>
                       
                    </div>

                    <div className='post-card-footer'>
                        <div className='card-date-row'>
                            <FaRegCalendarAlt id='card-date-icon' size={16}/>
                            <p className="post-card-date">{post.date}</p>
                        </div>
                    </div>
            </m.div>
        </Link>
    )
}

export default PostCard