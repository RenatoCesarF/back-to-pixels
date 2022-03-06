import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/HeaderComponent'

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import HeadTag from '../components/HeadTag';
import WEB_SITE_INFO from '../utils/webSiteInfo';
import { Toaster } from 'react-hot-toast';

const bubbleOptions = {className: 'toaster',
success:{
  style:{
    background: "#485188"
  }
},
error: {
  style: {
    background: 'red',
  },
},}


const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return(
    <>
      <HeadTag 
        image="/images/logo.png"
        title={`${WEB_SITE_INFO.NAME}`}
        description={`${WEB_SITE_INFO.NAME} official website. Follow our journey creating our projects and Games`}
        keywords={[]} 
        date={new Date()} 
        url=""
      />

      <Header/>
      <AnimatePresence exitBeforeEnter onExitComplete={handleScrollToTop}>
        <MotionConfig reducedMotion='user'>
          <motion.div
                key={router.route}
                initial="exit"
                animate="enter"
                exit="exit"
                transition={{ ease: [0.175, 0.85, 0.42, 0.96], duration: 0.2, staggerChildren: 0.1 }}
                >
                <Component {...pageProps} />
          </motion.div>
        </MotionConfig>
      </AnimatePresence>
      <Toaster position='bottom-center' toastOptions={bubbleOptions}/>
      <Footer/>
    </>

  ) 
}

export default MyApp;
