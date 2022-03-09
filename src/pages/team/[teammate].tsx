import { domAnimation, LazyMotion, m } from "framer-motion";
import { useRouter } from "next/router";

import CustomButton, { ButtonIcon } from "@components/CustomButton";
import InDevelopment from "@components/InDevelopment";
import Author, { getAuthor, getAuthorsList } from "@root/src/classes/authorType";
import { slideButtonDown } from "@helpers/animations";

interface IAuthor{author: Author};
type Params = {teammate: string};
type StaticResponse = {params: Params};


const Teammate: React.FC<IAuthor> = ({author}: IAuthor) => {
    const router = useRouter();
    return (
        <div> 
            <LazyMotion features={domAnimation}>
                <m.div variants={slideButtonDown}>
                    <CustomButton description='Return to Blog page' text='' icon={ButtonIcon.arrowBack} onClick={() => {router.back()}}/>
                </m.div>
                <m.div className="page">
                    <p>{author.name}</p>
                    <InDevelopment/>

                    {/* 
                        //imagem | nome
                                    sobre
                        // roles

                        // <hr/>
                        
                        //links e emails

                        // write for categories such as : categories that the author has written about

                        // List of posts from this author
                    */}
                </m.div>
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
