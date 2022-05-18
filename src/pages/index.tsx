import type { NextPage } from 'next';
import generateRssFeed from '@scripts/rss'

import { motion} from 'framer-motion'
import { slideInDown, slideInLeft } from '@helpers/animations'
import HeadTag from '@components/HeadTag';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import ParalaxElement from '@components/ParalaxElement'
import Carousel from '@components/Carousel/Carousel';

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
            
    
            <div className="waves">
              <svg id="visual" viewBox="0 0 1080 720"  xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path d="M0 173L25.7 167.7C51.3 162.3 102.7 151.7 154.2 149.8C205.7 148 257.3 155 308.8 164.5C360.3 174 411.7 186 463 183C514.3 180 565.7 162 617 150.3C668.3 138.7 719.7 133.3 771.2 139C822.7 144.7 874.3 161.3 925.8 162C977.3 162.7 1028.7 147.3 1054.3 139.7L1080 132L1080 0L1054.3 0C1028.7 0 977.3 0 925.8 0C874.3 0 822.7 0 771.2 0C719.7 0 668.3 0 617 0C565.7 0 514.3 0 463 0C411.7 0 360.3 0 308.8 0C257.3 0 205.7 0 154.2 0C102.7 0 51.3 0 25.7 0L0 0Z" fill="#241e3e"></path><path d="M0 68L25.7 72.3C51.3 76.7 102.7 85.3 154.2 92.3C205.7 99.3 257.3 104.7 308.8 104.5C360.3 104.3 411.7 98.7 463 106.7C514.3 114.7 565.7 136.3 617 136.2C668.3 136 719.7 114 771.2 114.3C822.7 114.7 874.3 137.3 925.8 144C977.3 150.7 1028.7 141.3 1054.3 136.7L1080 132L1080 0L1054.3 0C1028.7 0 977.3 0 925.8 0C874.3 0 822.7 0 771.2 0C719.7 0 668.3 0 617 0C565.7 0 514.3 0 463 0C411.7 0 360.3 0 308.8 0C257.3 0 205.7 0 154.2 0C102.7 0 51.3 0 25.7 0L0 0Z" fill="#2e264f"></path><path d="M0 84L25.7 76.5C51.3 69 102.7 54 154.2 45.2C205.7 36.3 257.3 33.7 308.8 33.7C360.3 33.7 411.7 36.3 463 48.7C514.3 61 565.7 83 617 85.8C668.3 88.7 719.7 72.3 771.2 69C822.7 65.7 874.3 75.3 925.8 80.2C977.3 85 1028.7 85 1054.3 85L1080 85L1080 0L1054.3 0C1028.7 0 977.3 0 925.8 0C874.3 0 822.7 0 771.2 0C719.7 0 668.3 0 617 0C565.7 0 514.3 0 463 0C411.7 0 360.3 0 308.8 0C257.3 0 205.7 0 154.2 0C102.7 0 51.3 0 25.7 0L0 0Z" fill="#382f60"></path>
              </svg>
            </div>
        </div>

      </>
      
  )
}

export async function getStaticProps(){
  await generateRssFeed();

  return {props: {}};
}

export default Home;
