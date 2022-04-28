import dynamic from 'next/dynamic';



import globalStyles from '@styles/blog.styles';
import Post, { createPost, getPostsFileName } from '@classes/Post';
import {sortByDate} from '@utils/sort';

import WEBSITE_INFO from '@helpers/webSiteInfo';
import PostGrid from '@components/PostsGrid';
import CategoryCount from '@components/CategoryCount';

const HeadTag = dynamic(() => import('@components/HeadTag'));
const RssLinks = dynamic(() => import('@components/RssLinks/RssLinks'));

interface PostList{
  posts: Post[]
};

export default function BlogPage({posts}:PostList){
    return (
        <>
          <style jsx global>
              {globalStyles}
          </style>
          <HeadTag 
              image={WEBSITE_INFO.LOGO_PATH}  //use generator here
              title={`${WEBSITE_INFO.NAME} – Blog`}
              description={`${WEBSITE_INFO.NAME} Blog Page - A list of all our articles and blog posts. Here we document the process of the development of all our projects and games`}
              keywords={[]} 
              date={new Date()} 
              url="/blog"
          />

          <div className='page'>
              <div >
                <h1 className="page-title">Posts</h1>
              </div>
              <div className='posts-written' >
                <span className="post-count-text">We have written</span>
                <span className='post-count'> {posts.length} </span>
                <span className="post-count-text">posts</span>
              </div>

              <CategoryCount posts={posts}/>

              <PostGrid posts={posts}/>
          </div>
          <RssLinks/>
        </>
    );
}

export async function getStaticProps(){
    const files = getPostsFileName();
  
    var posts: Post[] = files.map(filename => {
      return createPost(filename);
    });

    posts = posts.sort(sortByDate);
    return {
      props: {posts}
    };
}

