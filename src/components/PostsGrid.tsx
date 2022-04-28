
import Post from "@classes/Post";
import PostCard from "@components/PostCard/PostCard";

// const PostCard = dynamic(() => import('@components/PostCard'));

interface PostGridProps{
    posts: Post[]
}

const PostGrid = ({posts}: PostGridProps) =>{
    return(
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
    )
}

export default PostGrid;