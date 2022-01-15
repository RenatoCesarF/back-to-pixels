import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

import globalStyles from '../styles/blog.styles'
import PostCard from '../components/PostCard';
import Post from '../classes/postType';
import {sortByDate, sortByDateReverse} from '../utils/sort';
import Author from '../classes/authorType';
import Head from 'next/head';

interface PostList{
  posts: Post[]
};

export default function BlogPage(posts:PostList ){
    const sourtedPosts = posts.posts.sort(sortByDate);
    return (
        <>
          <Head>
                <meta name="description" content="Blog Page - A list of all our articles and blog posts."/>
                <meta name="author" content="Renato Cesar"></meta>
                <meta name="robots" content="follow"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <title>CompanyName Blog</title>
          </Head>
          <div className='page'>
              <style jsx global>
                  {globalStyles}
              </style>
              <h1 className="page-title">Posts</h1>
              <div className='posts-grid'>
              {
                sourtedPosts.map((post: Post, index: number) =>(
                  <PostCard post={post} key={index}/>
                  ))
                }
              </div>
          </div>
        </>
    );
}


export async function getStaticProps(){
    const files = fs.readdirSync(path.join('posts'));
    const maximumExcerptSize: number = 70
  
    var posts: Post[] = files.map(filename => {
      const slug: string = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
      const {data, content} = matter(markdownWithMeta);
      if(data.excerpt.length > maximumExcerptSize){
          data.excerpt = data.excerpt.substr(0, maximumExcerptSize) + '...';
      }

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