import { domAnimation, LazyMotion, m } from "framer-motion";
import dynamic from "next/dynamic";

import Post from "@classes/postType";
const PostCard = dynamic(() => import('@components/PostCard'));

const PostGrid = (props: any) =>{
    return(
        <LazyMotion features={domAnimation}>
            <m.div className='posts-grid'>
            {
                props.posts.map((post: Post, index: number) =>{
                return <PostCard post={post} key={index}/>
                })
            }
            </m.div>
        </LazyMotion> 
    )
}

export default PostGrid;