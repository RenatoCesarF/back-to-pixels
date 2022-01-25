import React, { useState } from 'react';
import Link from 'next/link';

import Post from '../classes/postType';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { m, motion } from 'framer-motion';
import { cardVariants, slideInUp } from '../helpers/animations';
import Category, { CategoryType } from '../classes/category';
import CategoryTag, { CategoryTagTransparent } from './CategoryTag';

interface IPost{
    post: Post
}
const maximumExcerptSize: number = 70;

const PostCard: React.FC<IPost> = ({post}: IPost) => {
    const [isHovering, setIsHovering] = useState(false);
    const hasCoverImage:boolean = post.cover_image != undefined || post.cover_image != null;
    const extendedCategories: boolean = post.categories.length > 2;
    var shortExcerpt: string = post.excerpt;
    if(post.excerpt.length > maximumExcerptSize){
        shortExcerpt = post.excerpt.substring( 0, maximumExcerptSize) + "...";
    }

    return(
        <m.div className='post-card-div'  variants={cardVariants} 
            onMouseOver={()=>{setIsHovering(true)}}
            onMouseLeave={()=>{setIsHovering(false)}}
            onTouchStart={()=>{setIsHovering(true)}}
            onTouchEnd={()=>{setIsHovering(false)}}
        >
            <Link passHref href={`/blog/${post.slug}`}>
                <m.div className="post-card-clickable">
                    <div className='post-card-image-container'>
                        {
                            hasCoverImage ? 
                            <img className='post-card-img' alt='post card image' src={post.cover_image}/>
                            : 
                            <h1 className='post-card-cover-date'>{post.date}</h1>
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
                </m.div>
            </Link>

            <m.footer className='post-card-footer'>
                <div className='card-date-row'>
                    <FaRegCalendarAlt id='card-date-icon' size={16}/>
                    <p className="post-card-date">{post.date}</p>
                </div>
                <div className='post-card-categories-row'>
                    <div className='tooltip'>
                        <div className={extendedCategories? "categories-row" : ""}>
                            {
                                post.categories.map((category: Category, index: number)=>{
                                    if(index >= 2) return;
                                    return <CategoryTag category={category} key={index}/>
                                })
                            }
                            {/* {extendedCategories ? "..." : ""} */}
                            {extendedCategories ? <CategoryTagTransparent category={post.categories[2]}/> : <></>}
                        </div>
                        {
                            extendedCategories
                            ?
                            <span className="tooltiptext">
                                <div className="extended-categories"  >
                                {
                                    post.categories.map((category: Category, index: number)=>{
                                        return (
                                        <m.div 
                                            whileHover={{ scale: 1.1 }}
                                            style={{display: "inline-block", transitionDuration: "0s"}}
                                            key={index}  
                                        >
                                            <CategoryTag category={category} key={index} />
                                        </m.div>
                                        )
                                    })
                                }
                                </div>
                            </span>
                            :
                            <></>
                        }
                    </div>
                </div>
            </m.footer>
        </m.div>

    )
}

export default PostCard