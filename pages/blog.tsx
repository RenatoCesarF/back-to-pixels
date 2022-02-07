import {readdirSync} from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import dynamic from 'next/dynamic'

import { domAnimation, LazyMotion, m, motion } from 'framer-motion';
import NextHead from 'next/head';


import globalStyles from '../styles/blog.styles'
import Post, { createPost, getCoverImage } from '../classes/postType';
import {sortByDate, sortByDateReverse} from '../utils/sort';

import { slideInLeft } from '../helpers/animations';
import RssLinks from '../components/RssLinks';
import HeadTag from '../components/HeadTag';

const PostCard = dynamic(() => import("../components/PostCard"))

interface PostList{
  posts: Post[]
};

export default function BlogPage(posts:PostList){
    const sortedPosts = posts.posts.sort(sortByDate);
    return (
        <>
          <HeadTag 
              image="https://codingideas.vercel.app/images/logo.png" 
              title="Coding Ideas – Blog" 
              description="Coding Ideas Blog Page - A list of all our articles and blog posts."
              keywords={[]} 
              date={new Date()} 
              url="https://codingideas.vercel.app/blog"
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
                    sortedPosts.map((post: Post, index: number) =>{
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

    return {
      props: {posts}
    };
}

