import '../styles/globals.css'
import Header from '../components/header'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(

    <>
      <Header/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
