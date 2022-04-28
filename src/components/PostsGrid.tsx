import { domAnimation, LazyMotion } from "framer-motion";

import Post from "@classes/Post";
import dynamic from "next/dynamic";
// import PostCard from "@components/PostCard/PostCard";

const PostCard = dynamic(() => import('@components/PostCard/PostCard'));

interface PostGridProps{
    posts: Post[]
}

const PostGrid = ({posts}: PostGridProps) =>{
    return(
        <LazyMotion features={domAnimation}>
            <div className='posts-grid'>
                {
                    posts.length ?
                        posts.map((post: Post, index: number) =>{
                            return <PostCard post={post} key={index}/>
                        })
                    :
                    <p>Nothing here...</p>
                }
            </div>
        </LazyMotion> 
    )
}

export default PostGrid;