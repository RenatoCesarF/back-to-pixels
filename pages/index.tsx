import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import generateRssFeed from '../scripts/rss'
import NextHead from 'next/head';
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { slideInLeft } from '../helpers/animations'

const Home: NextPage = () => {
  return (
    <div  className='page'>
      <NextHead>
          <meta name="description" content="Company name website Home page, where you can learn more about our work"/>
          <meta name="author" content="Renato Cesar"/>
          <meta property="og:url" content="https://https://devblog-nine.vercel.app/"></meta>
          <meta property="og:title" content="CompanyName Home Page - Learn more about us"></meta>
          <meta property="og:description" content="CompanyName official website. You can follow our journey creating our projects and Games"></meta>
          <meta name="robots" content="follow"/>
          <meta name="robots" content="index, follow"/>
          <meta name="googlebot" content="index, follow"/>
          {/* <meta property="og:image" content="www.meusite.com.br/imagem.jpg"/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image:width" content="800"/> 
          <meta property="og:image:height" content="600"/>  */}
          <title>CompanyName Home</title>
      </NextHead>
      <motion.div className='page' variants={slideInLeft}>
        <h1>Home</h1>
      </motion.div>
    </div>
  )
}

export async function getStaticProps(){
  await generateRssFeed();

  return {props: {}};
}

export default Home;
