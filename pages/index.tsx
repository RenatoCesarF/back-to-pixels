import type { NextPage } from 'next'
import generateRssFeed from '../scripts/rss'

import { motion} from 'framer-motion'
import programmerLotie from '../public/lotties/programmer-lottie.json';
import { slideInLeft } from '../helpers/animations'
import InDevelopment from '../components/InDevelopment'
import HeadTag from '../components/HeadTag';
import webSiteInfo from '../utils/webSiteInfo';

const Home: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: programmerLotie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div  className='page'>
      <HeadTag 
              image="/images/logo.png" 
              title={`${webSiteInfo.name} Home`} 
              description={`${webSiteInfo.name} website Home page, Learn more about our work`}
              keywords={['home page']} 
              date={new Date()} 
              url=""
        />
      <div className='page' >
        <motion.div variants={slideInLeft}>
          <h1>Home</h1>
        </motion.div>
        <InDevelopment/>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  await generateRssFeed();

  return {props: {}};
}

export default Home;
