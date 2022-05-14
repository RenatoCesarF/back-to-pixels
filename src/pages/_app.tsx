import '@styles/globals.css'
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app'

import Header from '@components/HeaderComponent'
const Footer = dynamic(() => import('@components/Footer/Footer'));

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { toastOptions } from '@helpers/toastOptions';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return(
    <>
      <Header/>
      {/* <AnimatePresence exitBeforeEnter >
        <MotionConfig>
          <motion.div
                key={router.route}
                initial="exit"
                animate="enter"
                exit="exit"
                transition={{ ease: [0.175, 0.85, 0.42, 0.96], duration: 0.2, staggerChildren: 0.1 }}
                > */}
                <Component {...pageProps} />
          {/* </motion.div>
        </MotionConfig>
      </AnimatePresence> */}
      <Toaster position='bottom-center' toastOptions={toastOptions}/>
      <Footer/>
    </>

  ) 
}

export default MyApp;
