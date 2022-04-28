import { domAnimation, LazyMotion } from "framer-motion";

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import Post from "@classes/Post";
const PostCard = dynamic(() => import("@components/PostCard/PostCard"), { suspense: true });


interface PostGridProps{
    posts: Post[]
}

const PostGrid = ({posts}: PostGridProps) =>{
    return(
        <LazyMotion features={domAnimation}>
                <div className='posts-grid'>
                    <Suspense fallback={<p>Loading...</p>}>
                        {
                            posts.length ?
                                posts.map((post: Post, index: number) =>{
                                    return  <PostCard post={post} key={index}/>
                                })
                            :
                            <p>Nothing here...</p>
                        }
                    </Suspense>
                </div>
        </LazyMotion> 
    )
}


export default PostGrid;
