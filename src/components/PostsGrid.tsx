import { domAnimation, LazyMotion } from "framer-motion";

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import Post from "@classes/Post";
const PostCard = dynamic(() => import("@components/PostCard/PostCard"), { suspense: true });
// import PostCard from "@components/PostCard/PostCard";


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
                            return (
                                <Suspense key={index} fallback={<p key={index}>Loading...</p>}>
                                    <PostCard post={post} key={index}/>
                                </Suspense>
                            )
                        })
                    :
                    <p>Nothing here...</p>
                }
            </div>
        </LazyMotion> 
    )
}


export default PostGrid;