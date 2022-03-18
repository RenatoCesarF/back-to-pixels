import fs from 'fs';
import path from 'path';

import React from 'react';
import { useRouter } from 'next/router';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import dynamic from 'next/dynamic';

import Post, { createPost, getPostsFileName } from '@classes/postType';
import globalStyles from '@styles/slug.styles';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import {slideButtonDown, slideInUp } from '@helpers/animations';

import CustomButton, {ButtonIcon} from '@components/CustomButton/CustomButton';

const PostInternInformation = dynamic(() => import('@components/PostInternInformation'));
const RssLinks = dynamic(() => import('@components/RssLinks/RssLinks'));
const HeadTag = dynamic(() => import('@components/HeadTag'));
// const TranscribedPost = dynamic(() => import('@components/TranscribedPost'));
import TranscribedPost from "@components/TranscribedPost"


interface IPost{post: Post};
type Params = {slug: string};
type StaticResponse = {params: Params};


const PostPage: React.FC<IPost> = ({post}: IPost) => {
    const router = useRouter();
    const doenstHaveCoverImage:boolean = post.cover_image.includes('/default-images/');
    const postDate = new Date(post.date.replace("/","-"));
    
    var keywordsList: string[] = [];
    for(let i = 0; i< post.categories.length; i++){
        keywordsList.push(post.categories[i].name);
    }

    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <HeadTag 
                image={post.cover_image}
                title={`${post.title} - ${WEBSITE_INFO.NAME}`} 
                description={post.excerpt}
                keywords={keywordsList}
                date={postDate}
                url={`/blog/${post.slug}`}
                author={post.author}
            />
            <main role="main" className='post-section'>
                <article itemScope itemType='http://schema.org/Article' about={post.excerpt} className='post-container'>
                    <meta itemProp='datePublished' content={`${post.date} 11:30:00 -0700 -0700`}/>
                    <meta itemProp='publisher' content={WEBSITE_INFO.NAME}/>
                    <meta itemProp='image' content={post.cover_image}/>

                    <LazyMotion features={domAnimation}>
                        <m.div variants={slideButtonDown}>
                            <CustomButton description='Return to Blog page' text='' icon={ButtonIcon.arrowBack} onClick={() => {router.back()}}/>
                        </m.div>
                                
                        <m.div variants={slideInUp} className='post-cover-div'>
                                <img
                                    width='536px'height='341px'
                                    alt='blog post cover' className='post-cover' 
                                    src={post.cover_image}/>
                                {
                                    doenstHaveCoverImage ? 
                                    <h1 className='post-cover-date'>{post.date}</h1>
                                    : null
                                }   
                        </m.div >

                        <PostInternInformation post={post}/>
                        <hr style={{marginTop: "1.4rem"}}/>
                        
                        <m.section variants={slideInUp} itemProp="articleBody">
                            <h1 itemProp='name' className='post-title'>{post.title}</h1>
                            <p className='post-resume'>{post.excerpt}</p>
                            <br/>
                            <div className='post-content'> 
                                <TranscribedPost post={post}/>
                            </div>
                        </m.section>
                    </LazyMotion>
                </article>
            </main>
            <RssLinks/>
        </>
    );
};


export async function getStaticPaths(){
    const files = getPostsFileName();
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}: StaticResponse ){
    const slug: string = params.slug;
    const post: Post = createPost(`${slug}.md`);

    return {
        props:{ post } 
    };
}

export default PostPage;




