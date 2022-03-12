import { domAnimation, LazyMotion, m } from "framer-motion";
import { useRouter } from "next/router";

import CustomButton, { ButtonIcon } from "@components/CustomButton";
import Author, { getAuthor, getAuthorsList } from "@classes/authorType";
import { slideButtonDown, slideInUp } from "@helpers/animations";
import globalStyles from '@styles/teammate.styles';
import RoleTag from "@components/RoleTag";
import WEBSITE_INFO from "utils/webSiteInfo";
import HeadTag from "@components/HeadTag";
import dynamic from "next/dynamic";

const PostCard = dynamic(() => import('@components/PostCard'))

interface IAuthor{author: Author};
type Params = {teammate: string};
type StaticResponse = {params: Params};

var authorPageKeywords = ['Author', 'Writter', 'Blogger', 'Teammate', WEBSITE_INFO.NAME];

const Teammate: React.FC<IAuthor> = ({author}: IAuthor) => {
    const router = useRouter();
    authorPageKeywords.push(author.name,author.instagram, author.twitter);
    author.roles.map((val) => authorPageKeywords.push(val));

    return (
        <div> 
            <HeadTag 
              image={author.image_path}
              title={`${WEBSITE_INFO.NAME} Teammate – ${author.name}`}
              description={`${WEBSITE_INFO.NAME} Teammate ${author.name} - Info and posts from one of our Teammates`}
              keywords={authorPageKeywords} 
              date={new Date()} 
              url={`/team/${author.key}`} 
            />
            <style jsx global>
                {globalStyles}
            </style>
            <LazyMotion features={domAnimation}>
                <div className="page">
                    <div className="teammate-page">
                        <m.div variants={slideButtonDown}>
                            <CustomButton description='Return to Blog page' text='' icon={ButtonIcon.arrowBack} onClick={() => {router.back()}}/>
                        </m.div>
                        <m.div variants={slideInUp} className="teammate-page-author-info-row" > 
                            <div style={{alignItems: "center", display: 'flex',flexDirection: 'column'}}>
                                <img src={author.image_path} className="teammate-page-author-image"/>
                            </div>
                            <div>
                                <h1>{author.name}</h1>
                                <div className="author-roles">
                                    {
                                        author.roles.map((roll: string, index: number) => {
                                            return <RoleTag key={index} role={roll}/>
                                        })
                                    }
                                </div>
                                <p>{author.about}</p>
                            </div>

                        </m.div>

                    </div>
                </div>

            </LazyMotion>

        </div>
    )
} 


export async function getStaticPaths(){
    const authorsList = getAuthorsList();
    const paths = authorsList.map(authorKey => ({
        params: {
            teammate: authorKey[0]
        }
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}: StaticResponse ){
    const author: Author = getAuthor(params.teammate);

    return {
        props:{ author } 
    };
}

export default Teammate;
