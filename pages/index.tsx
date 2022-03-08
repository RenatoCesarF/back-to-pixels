import type { NextPage } from 'next'
import generateRssFeed from '@scripts/rss'

import { motion} from 'framer-motion'
import { slideInLeft } from '@helpers/animations'
import InDevelopment from '@components/InDevelopment'
import HeadTag from '@components/HeadTag';
import WEB_SITE_INFO from '@utils/webSiteInfo';

const Home: NextPage = () => {
  return (
    <div  className='page'>
      <HeadTag 
          image="/images/logo.png" 
          title={`${WEB_SITE_INFO.NAME} Home`} 
          description={`${WEB_SITE_INFO.NAME} website Home page, Learn more about our work`}
          keywords={['home page', 'home']} 
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
