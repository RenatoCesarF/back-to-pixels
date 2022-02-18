import NextHead from 'next/head';
import { m, motion } from 'framer-motion'

import { slideInLeft } from '../../../helpers/animations';
import InDevelopment from '../../../components/InDevelopment';
import HeadTag from '../../../components/HeadTag';

type Params = {tagName: string};
type StaticResponse = {params: Params};


const TeamPage = () => {

    return(
        <>
            {/* <HeadTag
            date={new Date()}
            description
            /> */}
                <div className='page'>
                <motion.div  variants={slideInLeft}>
                  
                </motion.div>
                <InDevelopment/>
            </div>
        </>
    )

}

export async function getStaticPaths(){
    // transformar os objetos do arquivo json de categorias e transformar em uma lista
    //passar por cada objeto e retornar o nome da tag como sendo o [tag] de cada pagina
      // const paths = files.map(filename => ({
    //     params: {
    //         slug: filename.replace('.md', '')
    //     }
    // }));

    // return {paths, fallback: false};
  
}

export async function getStaticProps({params}: StaticResponse ){
    // procurar no arquivo json de categorias onde a categoria 
    // é igual ao parametro, e então retornar as informações dessa categoria
    return {
        props:{ "category" } 
    };
}

export default TeamPage