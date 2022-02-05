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

const PostCard = dynamic(() => import("../components/PostCard"))

interface PostList{
  posts: Post[]
};

export default function BlogPage(posts:PostList){
    const sortedPosts = posts.posts.sort(sortByDate);
    return (
        <>
          <NextHead>
                <title>Coding Ideas – Blog</title>
                <meta name="description" content="Blog Page - A list of all our articles and blog posts."/>
                <meta name="author" content="Renato Cesar"></meta>
                <meta name="robots" content="follow"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta property="og:url" content="https://https://codingideas.vercel.app/blog"></meta>
                <meta property="og:title" content="Coding Ideas Blog Page - Read our posts"></meta>
          </NextHead>
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

