import Post from '../classes/postType'
import Link from 'next/link'
import React from 'react'

interface IPost{
    post: Post
}

const PostCard: React.FC<IPost> = (post: IPost) => {
    //
    return(
        <div className='post-card-div'>
            <img className='post-card-img' src={post.post.cover_image}/>
            <div className='post-card-container'>
                <h4 className='post-card-title'>{post.post.title}</h4>
                <p className='post-card-resume'>{post.post.excerpt}</p>
                <div>
                    <p className="post-card-date">{post.post.date}</p>
                    {/* <p>{post.categories}</p> */}
                </div>
            </div>
        </div>
    )
}

export default PostCard