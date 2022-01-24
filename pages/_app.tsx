import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/HeaderComponent'

import NextHead from 'next/head';
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return(
    <>
      <NextHead>
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* APPLE*/}
        <meta name="apple-mobile-web-app-title" content="My Site"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icon/apple-touch-icon.png"/>
        <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/images/icon/apple-touch-icon.png"/>
        {/* <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="grey"/> */}

        {/* MICROSOFT */}
        <meta  key="msapplication-TileColor" name="msapplication-TileColor" content="#382F60"/>
        <link key="icon32" rel="icon" type="image/png" sizes="32x32" href="/images/icon/favicon-32x32.png"/>
        <link key="icon16" rel="icon" type="image/png" sizes="16x16" href="/images/icon/favicon-16x16.png" />
        <link key="manifest" rel="manifest" href="/images/icon/site.webmanifest" />
        {/* <meta name="msapplication-config" content="/favicons/browserconfig.xml"/> */}


        {/* <link key="mask-icon" rel="mask-icon" href="/images/icon/safari-pinned-tab.svg"	
            color="#382F60"
        /> */}



        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#382F60" />
        <meta name="keywords" content="Indie Games, Development, Game, Indie, Company, Next, Developers, Blog"></meta>
        <meta name="copyright" content="© 2022 Renato Cesar" />
        <meta name="creator" content="Renato Cesar"/>
        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="idnex, follow"/>

        <meta name="google-site-verification" content="amj1tyhcjvwNjY_pZi-WJjthO7eC5SyaZZCrmbb835M" />
        
        <meta property="og:locale" content="en_US"/>
        <meta property="og:site_name" content="Coding Ideas"/>
        <meta property="og:type" content="blog"></meta>

        <meta property="og:url" content={`https://devblog-nine.vercel.app`} />
        <meta property="og:title" content="Coding Ideas"/>
        <meta property="og:site_name" content="Coding Ideas"/>
        <meta property="og:description" content="Coding Ideas official website. You can follow our journey creating our projects and Games"/>
        <meta property="og:image" content="https://devblog-nine.vercel.app/images/logo.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>
        <meta property="og:image:alt" content="Logo"/> 

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:website" content="@nerat0"/>
        <meta name="twitter:image" content="/images/logo.png"/>
        <meta name="twitter:title" content="Coding Ideas"/>
        <meta name="twitter:description" content="Coding Ideas official website. You can follow our journey creating our projects and Games"/>
        <meta name="twitter:creator" content="@nerat0"/>
        <meta property="twitter:url" content="https://devblog-nine.vercel.app/blog/"/>
        <meta property="twitter:domain" content="devblog-nine.vercel.app"/>
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
