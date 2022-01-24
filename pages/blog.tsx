import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dynamic from 'next/dynamic'

import { domAnimation, LazyMotion, m, motion } from 'framer-motion';
import NextHead from 'next/head';


import globalStyles from '../styles/blog.styles'
import PostCard from '../components/PostCard';
import CategoryTag from '../components/CategoryTag';
import Post from '../classes/postType';
import Author from '../classes/authorType';
import {sortByDate, sortByDateReverse} from '../utils/sort';

import { slideInUp, slideInLeft, slideCardUp, slideInDown, cardVariants } from '../helpers/animations';

// const PostCard = dynamic(() => import("../components/PostCard"))

interface PostList{
  posts: Post[]
};

export default function BlogPage(posts:PostList){
    const sourtedPosts = posts.posts.sort(sortByDate);
    return (
        <>
          <NextHead>
                <title>Coding Ideas Blog</title>
                <meta name="description" content="Blog Page - A list of all our articles and blog posts."/>
                <meta name="author" content="Renato Cesar"></meta>
                <meta name="robots" content="follow"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta property="og:url" content="https://https://devblog-nine.vercel.app/blog"></meta>
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
                  sourtedPosts.map((post: Post, index: number) =>(
                      <PostCard post={post} key={index}/>
                  ))
                }
               </m.div>

              </LazyMotion> 
          </div>
        </>
    );
}

export async function getStaticProps(){
    const files = fs.readdirSync(path.join('posts'));
  
    var posts: Post[] = files.map(filename => {
      const slug: string = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
      const {data, content} = matter(markdownWithMeta);

      const postAuthor: Author = {name: "Renato", about: "", email: "", image:"", instagram: "", twitter: "", role: ""}
    
      return {
          slug, 
          content,
          author: postAuthor ?? null,
          cover_image: data.cover_image ?? null,
          categories: data.categories ?? null,
          date:data.date ?? null,
          excerpt: data.excerpt ?? null, 
          title: data.title ?? null,
          code_theme: data.code_theme ?? null
      };
    })

    return {
      props: {posts}
    };
  
}