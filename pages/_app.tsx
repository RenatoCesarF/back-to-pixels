import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
