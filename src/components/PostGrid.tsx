import { domAnimation, LazyMotion } from "framer-motion";

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import Post from "@classes/Post";
import LoadingPostCard from "@components/PostCard/LoadingPostCard";

const PostCard = dynamic(() => import("@components/PostCard/PostCard"), { suspense: true });


interface PostGridProps{
    posts: Post[]
}

const PostGrid = ({posts}: PostGridProps) =>{
    return(
            <div className='posts-grid'>
                <Suspense fallback={loadingPostsList()}> 
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
    )
}

const loadingPostsList = (): JSX.Element =>{
    return(
        <>
            <LoadingPostCard/>
            <LoadingPostCard/>
            <LoadingPostCard/>
            <LoadingPostCard/>
            <LoadingPostCard/>
            <LoadingPostCard/>
        </>
    )
}

export default PostGrid;
