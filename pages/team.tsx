import NextHead from 'next/head';
import { domAnimation, LazyMotion, m, motion } from 'framer-motion'

import { slideInLeft } from '../helpers/animations';
import InDevelopment from '../components/InDevelopment';
import globalStyles from '../styles/teammate.styles';
import Author, { getAuthor, getAuthorsList } from '../classes/authorType';
import TeammateCard from '../components/TeammateCard';
import HeadTag from '../components/HeadTag';


interface authorsList{
    authors: Author[]
}

const TeamPage = ({authors}: authorsList) => {

    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <HeadTag 
              image="https://codingideas.vercel.app/images/logo.png" 
              title="Coding Ideas Team" 
              description="Coding IdeasTeam page - Read about our teammates"
              keywords={['home page']} 
              date={new Date()} 
              url="https://codingideas.vercel.app/team"
            />
            <div className='page'>
                <motion.div  variants={slideInLeft}>
                    <h1>Teams page</h1>
                </motion.div>
                <LazyMotion features={domAnimation}>
                    <m.div className='posts-grid'>
                        {
                            authors.map((teammate: Author, index: number) =>{
                                return <TeammateCard author={teammate} key={index}/>
                            })
                        }
                    </m.div>
                </LazyMotion>
                <InDevelopment/>
            </div>
        </>
    );
}


export async function getStaticProps(){
    const authorsList = getAuthorsList()
    var authors: Author[] = authorsList.map(authorKey => {
        return getAuthor(authorKey[0]);
    });

    return {
      props: {authors}
    };
}

export default TeamPage