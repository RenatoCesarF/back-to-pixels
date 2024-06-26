import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';
import { Suspense } from 'react';

import Post, { createPost, getPostRecomendations, getPostsFileName } from '@classes/Post';
import globalStyles from '@styles/slug.styles';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import { slideButtonDown, slideInUp } from '@helpers/animations';


import LoadingArea, { RandomLoadingAreas } from '@components/LoadingArea';
import CustomButton from '@components/CustomButton/CustomButton';
import windowScrollTo from '@utils/windowScrollTo';
import PostGrid from '@components/PostGrid';
import LazyImage from '@components/LazyImage';
import AnimatedLayout from '@components/AnimatedLayout';

const RssLinks = dynamic(() => import('@components/RssLinks/RssLinks'));
const HeadTag = dynamic(() => import('@components/HeadTag'));
const BackToTopButton = dynamic(() => import('@components/BackToTopButton'));

// const PostGrid              = dynamic(() => import('@components/PostGrid'),  {suspense: true});
const PostInternInformation = dynamic(() => import('@components/PostInternInformation'), { suspense: true });
const AutoGeneratedSumarry = dynamic(() => import('@components/AutoGeneratedSumarry'), { suspense: true });
const TranscribedPost = dynamic(() => import('@components/TranscribedPost'), { suspense: true });

interface SlugPageProps { post: Post, postsRecomendations: Post[] };
type Params = { slug: string };
type StaticResponse = { params: Params };

const PostPage: React.FC<SlugPageProps> = ({ post, postsRecomendations }: SlugPageProps) => {
    const router = useRouter();

    const doenstHaveCoverImage: boolean = post.cover_image.includes('/default-images/');
    const postDate = new Date(post.date.replace("/", "-"));

    var keywordsList: string[] = [];
    post.categories.every(category => keywordsList.push(category.name))

    return (
        <AnimatedLayout>
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

            <motion.div variants={slideButtonDown} style={{ margin: ".5rem 0" }}>
                <CustomButton description='Return to Blog page' text='' icon={"arrowBack"} onClick={() => { router.back() }} />
            </motion.div>

            <main role="main" className='post-section'>
                <motion.article
                    itemScope about={post.excerpt} className='post-container'
                    variants={slideInUp} itemType='http://schema.org/Article'
                >
                    <meta itemProp='datePublished' content={`${post.date} 11:30:00 -0700 -0700`} />
                    <meta itemProp='publisher' content={WEBSITE_INFO.NAME} />
                    <meta itemProp='image' content={post.cover_image} />

                    <BackToTopButton />

                    <motion.div variants={slideInUp} className='post-cover-div'>
                        <LazyImage
                            width='536px' height='341px'
                            className='post-cover'
                            alt='blog post cover'
                            layout="responsive"
                            src={post.cover_image}
                        />
                        {
                            doenstHaveCoverImage ?
                                <h1 className='post-cover-date'>{post.date}</h1>
                                : null
                        }
                    </motion.div >

                    <Suspense fallback={<LoadingArea height='8rem' width='100%' />}>
                        <PostInternInformation post={post} />
                    </Suspense>

                    <hr style={{ marginTop: "1.4rem" }} />
                    <section itemProp="articleBody">
                        <h1 itemProp='name' className='post-title'>{post.title}</h1>
                        <p className='post-resume'>{post.excerpt}</p>
                        <br />

                        <Suspense fallback={<LoadingArea height='8rem' width='100%' />}>
                            <AutoGeneratedSumarry content={post.content} />
                        </Suspense>

                        <div className='post-content'>
                            <Suspense fallback={<RandomLoadingAreas amount={8} />}>
                                <TranscribedPost post={post} />
                            </Suspense>
                        </div>
                        <div style={{ marginTop: "2rem" }}>
                            <CustomButton description='Return to Blog page' text='Back' icon={"arrowBack"} onClick={() => router.back()} />
                            <CustomButton description='Scroll To Top' text='Scroll To Top' icon={"arrowTop"} onClick={() => windowScrollTo()} />
                        </div>
                    </section>
                </motion.article>
            </main>

            <div style={{ margin: "0 clamp(1rem, 4rem, 6vw)" }}>
                <h2>Recomendations</h2>
            </div>

            <hr />

            <PostGrid posts={postsRecomendations} />
            <RssLinks />
        </AnimatedLayout>
    );
};


export async function getStaticPaths() {
    const files = getPostsFileName();
    const paths: { params: { slug: string; }; }[] = []

    files.forEach((filename) => {
        if (!filename.startsWith(".") && !filename.includes("DS_Store")) {
            paths.push({
                params: {
                    slug: filename.replace('/content', '')
                }
            });
        }

    })

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: StaticResponse) {
    const slug: string = params.slug;
    const post: Post = createPost(`${slug}`);
    const postsRecomendations: Post[] = getPostRecomendations(post);

    return {
        props: {
            post,
            postsRecomendations
        }
    };
}

export default PostPage;