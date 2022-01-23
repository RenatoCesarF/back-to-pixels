import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/HeaderComponent'

import NextHead from 'next/head';
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  //TODO: change location of head tag
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return(
    <>
      <NextHead>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#334257" />
        <meta name="keywords" content="Indie Games, Development, Game, Indie, Company, Next, Developers, Blog"></meta>
        <meta name="copyright" content="© 2022 Renato Cesar" />
        <meta name="creator" content="Renato Cesar"/>
        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="idnex, follow"/>

        <meta name="google-site-verification" content="amj1tyhcjvwNjY_pZi-WJjthO7eC5SyaZZCrmbb835M" />
        
        <meta property="og:locale" content="en_US"/>
        <meta property="og:site_name" content="Company Name"/>
        <meta property="og:type" content="website"></meta>
      </NextHead>
      <Header/>
      <AnimatePresence exitBeforeEnter onExitComplete={handleScrollToTop}>
        <motion.div
              key={router.route}
              initial="exit"
              animate="enter"
              exit="exit"
              transition={{ ease: [0.175, 0.85, 0.42, 0.96], duration: 0.2, staggerChildren: 0.1 }}>
              <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer/>
    </>

  ) 
}

export default MyApp;
