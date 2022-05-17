import '@styles/globals.css'
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app'

import Header from '@components/HeaderComponent'
const Footer = dynamic(() => import('@components/Footer/Footer'));

import { AnimatePresence} from 'framer-motion';
import { toastOptions } from '@helpers/toastOptions';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return(
    <>
      <Header/>
      <AnimatePresence exitBeforeEnter initial={true} >
          <Component {...pageProps} key={router.route}/>
      </AnimatePresence> 
      <Toaster position='bottom-center' toastOptions={toastOptions}/>
      <Footer/>
    </>

  ) 
}

export default MyApp;
