import { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import NextImage from 'next/image'
import { motion } from 'framer-motion';


import CategoryTag, { CategoryTagTransparent } from '@components/CategoryTag/CategoryTag';
import Post from '@classes/Post';
import Category from '@classes/category';
import { cardVariants } from '@helpers/animations';
import { rgbDataURL } from '@utils/rgbDataURL';

import globalStyles from './PostCard.styles'

interface IPost{
    post: Post
}
const maximumExcerptSize: number = 70;


const PostCard: React.FC<IPost> = ({post}: IPost) => {
    const [isHovering, setIsHovering] = useState(false);
    const doenstHaveCoverImage:boolean = post.cover_image.includes('/default-images/');
    const extendedCategories: boolean = post.categories.length > 2;
    var shortExcerpt: string = post.excerpt;

    if(post.excerpt.length > maximumExcerptSize){
        shortExcerpt = post.excerpt.substring( 0, maximumExcerptSize) + "...";
    }

    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                layout className='post-card-expanded-external'>
                <motion.div className='post-card-div'  
                    variants={cardVariants} 
                    onMouseOver={()=>{setIsHovering(true)}}
                    onMouseLeave={()=>{setIsHovering(false)}}
                    onTouchCancel={()=>{setIsHovering(false)}}
                    onTouchEndCapture={()=>{setIsHovering(true)}}
                    onTouchCancelCapture={()=>{setIsHovering(false)}}
                >
                    <Link passHref href={`/blog/${post.slug}`}>
                        <article className="post-card-clickable">
                            <header className='post-card-image-container'>
                                <NextImage 
                                    src={post.cover_image} 
                                    alt='post card image' 
                                    layout="fill" 
                                    loading='lazy'
                                    placeholder='blur'
                                    lazyBoundary='50px'
                                    blurDataURL={rgbDataURL(72, 81, 136)}   
                                    className='post-card-img'
                                />
                                {
                                    doenstHaveCoverImage ?
                                        <h1 className='post-card-cover-date'>{post.date}</h1> 
                                    : null 
                                }
                            </header>

                            <h2 className='post-card-title'>{post.title}</h2>

                            <div className='post-card-container'>
                                <div className='excerpt-post-card-div'>
                                    <p className='post-card-resume' >
                                        {isHovering ? post.excerpt : shortExcerpt}
                                    </p>
                                </div>
                            
                            </div>
                        </article>
                    </Link>

                    <footer className='post-card-footer'>
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
                                                    <motion.div 
                                                        whileHover={{ scale: 1.1 }}
                                                        style={{display: "inline-block", transitionDuration: "0s"}}
                                                        key={index}  
                                                    >
                                                        <CategoryTag category={category} key={index} />
                                                    </motion.div>
                                                )
                                            })
                                        }
                                        </div>
                                    </span>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </footer>
                </motion.div>
            </motion.div>
        </>
    )
}

export default PostCard