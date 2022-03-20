import { domAnimation, LazyMotion, m, motion } from "framer-motion";

import Post from "@classes/Post";
import PostCard from "@components/PostCard/PostCard";

// const PostCard = dynamic(() => import('@components/PostCard'));
import globalStyles from './PostGrid.styles.js'

interface PostGridProps{
    posts: Post[]
}

const PostGrid = ({posts}: PostGridProps) =>{
    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <LazyMotion features={domAnimation}>

                <m.div className='posts-grid'>
                    {
                        posts.length ?
                        posts.map((post: Post, index: number) =>{
                            return <PostCard post={post} key={index}/>
                        })
                        :
                        <p>Nothing here...</p>
                    }
                </m.div>
            </LazyMotion> 
        </>
        )
}

export default PostGrid;