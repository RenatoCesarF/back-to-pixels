import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

import globalStyles from '../styles/blog.styles'
import PostCard from '../components/PostCard';
import Post from '../classes/postType';

interface PostList{
  posts: Post[]
};

export default function BlogPage(posts:PostList ){
    return (
        <div>
            <style jsx global>
                {globalStyles}
            </style>
            <h1 className="page-title">Posts</h1>
            <div className='posts-grid'>
            {
              posts.posts.map((post: Post, index: number) =>(
                <PostCard post={post} key={index}/>
              ))
            }
            </div>
        </div>
    )
}


export async function getStaticProps(){
    const files = fs.readdirSync(path.join('posts'));
  
    const posts: Post[] = files.map(filename => {
      const slug: string = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
      const {data, content} = matter(markdownWithMeta);
      
      return {
          slug, 
          content,
          author: data.author ?? null,
          cover_image: data.cover_image ?? null,
          categories: data.categories ?? null,
          date:data.date ?? null,
          excerpt: data.excerpt ?? null, 
          title: data.title ?? null,
          code_theme: data.code_theme ?? null
      };

    })  
    
    return {
      props:{ posts } 
    };
  
}