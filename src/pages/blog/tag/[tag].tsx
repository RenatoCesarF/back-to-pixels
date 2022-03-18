import { m } from 'framer-motion'

import { slideInLeft } from '@helpers/animations';
import InDevelopment from '@components/InDevelopment';
import HeadTag from '@components/HeadTag';
import Category, { getAllCategories, getCategoryInfo } from '@classes/category';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import { getAuthor } from '@classes/authorType';
import CategoryTag from '@components/CategoryTag/CategoryTag';
import Post from '@classes/postType';

interface Params {tag: string};
interface StaticResponse {params: Params};
interface TagInfoProps {category: Category, posts: Array<Post>}

const TagInfo: React.FC<TagInfoProps> = ({category, posts}: TagInfoProps) => {
    return(
        <>
            <HeadTag
                image={WEBSITE_INFO.LOGO_PATH}
                date={new Date()}
                description={`Posts with category ${category.name} - ${category.about}`}
                keywords={[category.key.toString()]}
                title={`Category ${category.name} Posts - ${WEBSITE_INFO.NAME}`}
                url={`${WEBSITE_INFO.URL}/blog/tag/${category.key}`}
                author={getAuthor('renato')}
            />
            <div className='page'>
                <h1>X Posts in the category <CategoryTag category={category}/></h1>
                <p>{category.about}</p>
                <m.div  variants={slideInLeft}>
                  
                </m.div>
                <InDevelopment/>
            </div>
        </>
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
    const category: Category = getCategoryInfo(params.tag);
    const posts: Array<Post> = [];
    return {
        props:{ category, posts } 
    };
}

export default TagInfo