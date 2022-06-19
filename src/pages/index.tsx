import generateRssFeed from '@scripts/rss'
import HeadTag from '@components/HeadTag';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import ParalaxElement from '@components/ParalaxElement'
import Post, { getAllPostsSortedByDate } from '@classes/Post';
import PostCard from '@components/PostCard/PostCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '@helpers/carrouselConfiguration';

interface homeProps {
  posts: Post[]
}

const Home = ({ posts }: homeProps) => {

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

      <div style={{ overflowX: "hidden"}}>
        <ParalaxElement />

        <div className="waves">
          <svg id="master-artboard" viewBox="0 0 1400 312" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1, 0, 0, 0.8100227117538453, -3.1825177669525146, -11.138830908058878)">
              <g transform="matrix(1.2937281470806705, 0, 0, 2.4495264884006587, 2.1823692321777344, 1.607323283889857)">
                <path d="M0 173L25.7 167.7C51.3 162.3 102.7 151.7 154.2 149.8C205.7 148 257.3 155 308.8 164.5C360.3 174 411.7 186 463 183C514.3 180 565.7 162 617 150.3C668.3 138.7 719.7 133.3 771.2 139C822.7 144.7 874.3 161.3 925.8 162C977.3 162.7 1028.7 147.3 1054.3 139.7L1080 132L1080 0L1054.3 0C1028.7 0 977.3 0 925.8 0C874.3 0 822.7 0 771.2 0C719.7 0 668.3 0 617 0C565.7 0 514.3 0 463 0C411.7 0 360.3 0 308.8 0C257.3 0 205.7 0 154.2 0C102.7 0 51.3 0 25.7 0L0 0Z" fill="#241e3e" transform="matrix(1, 0, 0, 0.881978009065282, 0, 0)" />
                <path d="M0 68L25.7 72.3C51.3 76.7 102.7 85.3 154.2 92.3C205.7 99.3 257.3 104.7 308.8 104.5C360.3 104.3 411.7 98.7 463 106.7C514.3 114.7 565.7 136.3 617 136.2C668.3 136 719.7 114 771.2 114.3C822.7 114.7 874.3 137.3 925.8 144C977.3 150.7 1028.7 141.3 1054.3 136.7L1080 132L1080 0L1054.3 0C1028.7 0 977.3 0 925.8 0C874.3 0 822.7 0 771.2 0C719.7 0 668.3 0 617 0C565.7 0 514.3 0 463 0C411.7 0 360.3 0 308.8 0C257.3 0 205.7 0 154.2 0C102.7 0 51.3 0 25.7 0L0 0Z" fill="#2e264f" transform="matrix(1, 0, 0, 0.9818359256794883, 0, 0)" />

                <path d="M0 84L25.7 76.5C51.3 69 102.7 54 154.2 45.2C205.7 36.3 257.3 33.7 308.8 33.7C360.3 33.7 411.7 36.3 463 48.7C514.3 61 565.7 83 617 85.8C668.3 88.7 719.7 72.3 771.2 69C822.7 65.7 874.3 75.3 925.8 80.2C977.3 85 1028.7 85 1054.3 85L1080 85L1080 0L1054.3 0C1028.7 0 977.3 0 925.8 0C874.3 0 822.7 0 771.2 0C719.7 0 668.3 0 617 0C565.7 0 514.3 0 463 0C411.7 0 360.3 0 308.8 0C257.3 0 205.7 0 154.2 0C102.7 0 51.3 0 25.7 0L0 0Z" fill="#382f60" transform="matrix(1, 0, 0, 1.0362495629586366, 0, 0)" />
              </g>
            </g>
          </svg>
        </div>

        <Carousel
          swipeable
          keyBoardControl
          draggable
          autoPlay={false}
          autoPlaySpeed={0}
          shouldResetAutoplay={false}
          responsive={responsive}
          ssr={true}
          className='carousel'
        >
          {
            posts.map((element, index) => {
              return <PostCard post={element} key={index}/>
            })
          }
        </Carousel>

      </div>
 
    </>
  )
}

export async function getStaticProps() {
  await generateRssFeed();
  const posts = getAllPostsSortedByDate().slice(0,6)
  return { props: { posts } };
}

export default Home;
