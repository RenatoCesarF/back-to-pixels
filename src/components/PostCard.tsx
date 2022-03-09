import { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { m } from 'framer-motion';

import CategoryTag, { CategoryTagTransparent } from '@components/CategoryTag';
import Post from '@root/src/classes/postType';
import Category from '@root/src/classes/category';
import { cardVariants } from '@helpers/animations';
import { sortByCategoryImportance } from '@root/src/utils/sort';

interface IPost{
    post: Post
}
const maximumExcerptSize: number = 70;

const PostCard: React.FC<IPost> = ({post}: IPost) => {
    const [isHovering, setIsHovering] = useState(false);
    const doenstHaveCoverImage:boolean = post.cover_image.includes('/default-images/');
    const extendedCategories: boolean = post.categories.length > 2;
    const sortedCategories: Category[] = post.categories.sort(sortByCategoryImportance);
    var shortExcerpt: string = post.excerpt;

    if(post.excerpt.length > maximumExcerptSize){
        shortExcerpt = post.excerpt.substring( 0, maximumExcerptSize) + "...";
    }
   
    return(
        <m.div variants={cardVariants}  className='post-card-expanded-external'>
            <m.div className='post-card-div'  
                onMouseOver={()=>{setIsHovering(true)}}
                onMouseLeave={()=>{setIsHovering(false)}}
                onTouchCancel={()=>{setIsHovering(false)}}
                onTouchEndCapture={()=>{setIsHovering(true)}}
                onTouchCancelCapture={()=>{setIsHovering(false)}}
                >
                <Link passHref href={`/blog/${post.slug}`}>
                    <m.article className="post-card-clickable">
                        <header className='post-card-image-container'>
                            <img 
                                src={post.cover_image}
                                className='post-card-img' 
                                alt='post card image' 
                                width='269px' 
                                height='144px' 
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
                    </m.article>
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
                                    sortedCategories.map((category: Category, index: number)=>{
                                        if(index >= 2) return;
                                        return <CategoryTag category={category} key={index}/>
                                    })
                                }
                                {extendedCategories ? <CategoryTagTransparent category={sortedCategories[2]}/> : <></>}
                            </div>
                            {
                                extendedCategories
                                ?
                                <span className="tooltiptext">
                                    <div className="extended-categories"  >
                                    {
                                        sortedCategories.map((category: Category, index: number)=>{
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
                                null
                            }
                        </div>
                    </div>
                </m.footer>
            </m.div>
        </m.div>
    )
}

export default PostCard