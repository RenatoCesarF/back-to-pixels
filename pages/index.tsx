import type { NextPage } from 'next'
import generateRssFeed from '../scripts/rss'
import NextHead from 'next/head';
import styles from '../styles/Home.module.css'
import { motion} from 'framer-motion'
import programmerLotie from '../public/lotties/programmer-lottie.json';
import { slideInLeft } from '../helpers/animations'
import InDevelopment from '../components/InDevelopment'

const Home: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: programmerLotie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div  className='page'>
      <NextHead>
          <meta name="description" content="Coding Ideas website Home page, Learn more about our work"/>
          <meta property="og:url" content="https://https://codingideas.vercel.app"/>
          <meta property="og:title" content="Coding Ideas Home Page - Learn more about us"/>
          <meta name="robots" content="follow"/>
          <meta name="robots" content="index, follow"/>
          <meta name="googlebot" content="index, follow"/>
  
          <title>Coding Ideas Home</title>
      </NextHead>
      <div className='page' >
        <motion.div variants={slideInLeft}>
          <h1>Home</h1>
        </motion.div>
        <InDevelopment/>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  await generateRssFeed();

  return {props: {}};
}

export default Home;
