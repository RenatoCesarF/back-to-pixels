import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/HeaderComponent'
import Link from 'next/link'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  //TODO: change location of head tag
  return(
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="var(--main-color)" />
        <meta name="keywords" content="Indie Games, Development, Game, Indie, Company, Next, Developers, Blog"></meta>
        <meta name="copyright" content="© 2022 Renato Cesar" />
        <meta name="creator" content="Renato Cesar"/>
        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="idnex, follow"/>

        <meta name="google-site-verification" content="amj1tyhcjvwNjY_pZi-WJjthO7eC5SyaZZCrmbb835M" />
        
        <meta property="og:locale" content="en_US"/>
        <meta property="og:site_name" content="Company Name"/>
        <meta property="og:type" content="website"></meta>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>

  ) 
}

export default MyApp;
