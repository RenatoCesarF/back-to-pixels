import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/HeaderComponent'
import Link from 'next/link'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  //TODO: change location of head tag
  return(
    <>
      <head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#555555" />
        <meta
          name="description"
          content="..."
        />
        <meta name="keywords" content="Indie Games, Development, Game, Indie, Company, Next, Developers, Blog"></meta>
        <meta name="author" content="Renato Cesar"></meta>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>DevBlog</title>
      </head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>

  ) 
}

export default MyApp;
