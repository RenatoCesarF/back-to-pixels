import { motion } from 'framer-motion'

import {opacityChange, slideButtonDown } from '@helpers/animations';
import HeadTag from '@components/HeadTag';
import Category, { getAllCategories, getCategoryByKey } from '@classes/category';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import { getAuthor } from '@classes/Author';
import CategoryTag from '@components/CategoryTag/CategoryTag';
import Post, { filterPostsByCategory } from '@classes/Post';

import styles from '@styles/tag.styles.js';
import CustomButton from '@components/CustomButton/CustomButton';
import { useRouter } from 'next/router';
import PostGrid from '@components/PostGrid';
import { sortByDate } from '@utils/sort';
import AnimatedLayout from '@components/AnimatedLayout';

interface Params {tag: string};
interface StaticResponse {params: Params};
interface TagInfoProps {category: Category, posts: Post[]}

const TagInfo: React.FC<TagInfoProps> = ({category, posts}: TagInfoProps) => {
    const router = useRouter();
    return(
        <AnimatedLayout>
            <style jsx global>
                {styles}
            </style>
            <HeadTag
                image={WEBSITE_INFO.LOGO_PATH}
                date={new Date()}
                description={`Posts in ${category.name} Category - ${category.about}`}
                keywords={[category.key.toString()]}
                title={`Posts In ${category.name} Category - ${WEBSITE_INFO.NAME}`}
                url={`${WEBSITE_INFO.URL}/blog/tag/${category.key}`}
                author={getAuthor('renato')}
            />
            <main className='tag-especific-page'>
                <motion.div variants={slideButtonDown}>
                    <CustomButton description='Return to Blog page' text='' icon={"arrowBack"} onClick={() => {router.back()}}/>
                </motion.div>

                <motion.div variants={slideButtonDown} className="tag-page-description">
                    <h1>{posts.length}</h1>
                    <h2>Posts in the category <CategoryTag isBig category={category}/></h2>
                </motion.div>
                
                <motion.p variants={opacityChange}>{category.about}</motion.p>

            </main>
            <section className='tag-page-posts-section'>
                <PostGrid posts={posts}/>
            </section>
        </AnimatedLayout>
    )

}


export async function getStaticPaths(){
    const allCategories: Category[]  = getAllCategories();
    const paths = allCategories.map((element: Category) => ({
        params: {
            tag: element.key
        }
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}: StaticResponse ){
    const category: Category = getCategoryByKey(params.tag);
    const posts: Post[] = filterPostsByCategory(category).sort(sortByDate);
    return {
        props:{ category, posts } 
    };
}

export default TagInfo