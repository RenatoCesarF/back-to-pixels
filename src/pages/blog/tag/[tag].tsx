import { m } from 'framer-motion'

import { slideInLeft } from '@helpers/animations';
import InDevelopment from '@components/InDevelopment';
import HeadTag from '@components/HeadTag';
import Category, { getAllCategories, getCategoryInfo } from '@root/src/classes/category';
import WEB_SITE_INFO from '@root/src/utils/webSiteInfo';
import { getAuthor } from '@root/src/classes/authorType';
import CategoryTag from '@components/CategoryTag';

interface Params {tag: string};
interface StaticResponse {params: Params};
interface TagInfoProps {category: Category}

const TagInfo: React.FC<TagInfoProps> = ({category}: TagInfoProps) => {
    return(
        <>
            <HeadTag
                date={new Date()}
                description={category.about}
                keywords={[category.key.toString()]}
                title={`Category ${category.name} Posts - ${WEB_SITE_INFO.NAME}`}
                url={`${WEB_SITE_INFO.DEFAULT_URL}/blog/tag/${category.key}`}
                author={getAuthor('renato')}
                image={"/images/logo.png"} //use generator here
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
    return {
        props:{ category } 
    };
}

export default TagInfo