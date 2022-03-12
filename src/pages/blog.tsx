import dynamic from 'next/dynamic'

import { domAnimation, LazyMotion, m, motion } from 'framer-motion';

import globalStyles from '@styles/blog.styles'
import Post, { createPost, getAllPostsData } from '@root/src/classes/postType';
import {sortByDate, sortByDateReverse} from '@root/src/utils/sort';

import { slideInLeft } from '@helpers/animations';
import WEBSITE_INFO from '@root/src/utils/webSiteInfo';

const HeadTag = dynamic(() => import('@components/HeadTag'));
const RssLinks = dynamic(() => import('@components/RssLinks'));
const PostCard = dynamic(() => import('@components/PostCard'));

interface PostList{
  posts: Post[]
};


export default function BlogPage({posts}:PostList){
    return (
        <>
          <HeadTag 
              image="/images/logo.png"  //use generator here
              title={`${WEBSITE_INFO.NAME} – Blog`}
              description={`${WEBSITE_INFO.NAME} Blog Page - A list of all our articles and blog posts. Here we document the process of the development of all our projects and games`}
              keywords={[]} 
              date={new Date()} 
              url="/blog"
          />

          <div className='page'>
              <style jsx global>
                  {globalStyles}
              </style>
              <motion.div variants={slideInLeft}>
                <h1 className="page-title">Posts</h1>
              </motion.div>

              <LazyMotion features={domAnimation}>
                <m.div className='posts-grid'>
                  {
                    posts.map((post: Post, index: number) =>{
                      return <PostCard post={post} key={index}/>
                    })
                  }
                </m.div>
              </LazyMotion> 
              
          </div>
          <RssLinks/>
        </>
    );
}

export async function getStaticProps(){
    const files = getAllPostsData();
  
    var posts: Post[] = files.map(filename => {
      return createPost(filename);
    });

    posts = posts.sort(sortByDate);
    return {
      props: {posts}
    };
}

