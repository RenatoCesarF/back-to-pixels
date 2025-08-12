import { JSX, Suspense } from 'react'
import dynamic from 'next/dynamic'

import Post from "@classes/Post";
import LoadingPostCard from "@components/PostCard/LoadingPostCard";

const PostCard = dynamic(() => import("@components/PostCard/PostCard"), {
  loading: () => <LoadingPostCard />,
  ssr: false,
});


interface PostGridProps {
  posts: Post[]
}

const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <div className='posts-grid'>
      <Suspense fallback={loadingPostsList()}>
        {
          posts.length ?
            posts.map((post: Post, index: number) => {
              return (
                <div key={index}>
                  <PostCard post={post} key={index} />
                </div>
              )
            })
            :
            <p>Nothing here...</p>
        }
      </Suspense>
    </div>
  )
}

const loadingPostsList = (): JSX.Element => {
  return (
    <>
      <LoadingPostCard />
      <LoadingPostCard />
      <LoadingPostCard />
      <LoadingPostCard />
      <LoadingPostCard />
      <LoadingPostCard />
    </>
  )
}

export default PostGrid;
