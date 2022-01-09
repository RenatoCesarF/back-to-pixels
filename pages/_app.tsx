import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

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
        <meta name="keywords" content="Indie Games, Development, Game, Indie, Company, Next, Developers"></meta>
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
