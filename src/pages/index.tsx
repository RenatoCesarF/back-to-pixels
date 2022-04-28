import type { NextPage } from 'next';
import generateRssFeed from '@scripts/rss'

import { motion} from 'framer-motion'
import { slideInDown, slideInLeft } from '@helpers/animations'
import HeadTag from '@components/HeadTag';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import ParalaxElement from '@components/ParalaxElement'

const Home = () => {
  return (
    <>
      <HeadTag 
          image={WEBSITE_INFO.LOGO_PATH}
          title={`${WEBSITE_INFO.NAME}`} 
          description={`${WEBSITE_INFO.NAME} website Home page, Learn more about our work`}
          keywords={['home page', 'home']} 
          date={new Date()} 
          url=""
          />
          <div style={{overflowX: "hidden"}}>

            <ParalaxElement/>                         
          </div>
          <div style={{height: "200vh"}}>

          </div>

      </>
      
  )
}

export async function getStaticProps(){
  await generateRssFeed();

  return {props: {}};
}

export default Home;
