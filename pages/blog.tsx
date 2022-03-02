import {readdirSync} from 'fs';
import {join} from 'path';
import dynamic from 'next/dynamic'

import { domAnimation, LazyMotion, m, motion } from 'framer-motion';


import globalStyles from '../styles/blog.styles'
import Post, { createPost } from '../classes/postType';
import {sortByDate, sortByDateReverse} from '../utils/sort';

import { slideInLeft } from '../helpers/animations';
import WEB_SITE_INFO from '../utils/webSiteInfo';


const HeadTag = dynamic(() => import('../components/HeadTag'))
const RssLinks = dynamic(() => import('../components/RssLinks'))
const PostCard = dynamic(() => import('../components/PostCard'))

interface PostList{
  posts: Post[]
};


export default function BlogPage({posts}:PostList){
    return (
        <>
          <HeadTag 
              image="/images/logo.png"  //use generator here
              title={`${WEB_SITE_INFO.NAME} – Blog`}
              description={`${WEB_SITE_INFO.NAME} Blog Page - A list of all our articles and blog posts. Here we document the process of the development of all our projects and games`}
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
    const files = readdirSync(join('posts'));
  
    var posts: Post[] = files.map(filename => {
      return createPost(filename);
    });

    posts = posts.sort(sortByDate);
    return {
      props: {posts}
    };
}

