import Post from '../classes/postType'
import Link from 'next/link'
import React from 'react'

interface IPost{
    post: Post
}

const PostCard: React.FC<IPost> = ({post}: IPost) => {
    //
    return(
        <Link href={`/blog/${post.slug}`}>
            <div className='post-card-div'>
                    <img className='post-card-img' src={post.cover_image}/>
                    <div className='post-card-container'>
                        <h4 className='post-card-title'>{post.title}</h4>
                        <p className='post-card-resume'>{post.excerpt}</p>
                        <div>
                            <p className="post-card-date">{post.date}</p>
                            {/* <p>{post.categories}</p> */}
                        </div>
                    </div>
            </div>
        </Link>
    )
}

export default PostCard