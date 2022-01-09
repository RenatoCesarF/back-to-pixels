import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return(
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  ) 
}

export default MyApp;
