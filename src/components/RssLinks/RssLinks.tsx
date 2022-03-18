import WEBSITE_INFO from '@helpers/webSiteInfo';
import styles from './RssLinks.styles';

const RssLinks = () =>{
    const baseURL: string = `${WEBSITE_INFO.URL}/rss`
    return (
        <>
            <style>
                {styles}
            </style>
            <div className="rss-feed-container">
                <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href={`${baseURL}/atom.xml`}>Atom Feed</a>
                <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href={`${baseURL}/feed.json`}>Json Feed</a>
                <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href={`${baseURL}/feed.xml`}>RSS Feed</a>
            </div>
        </>
    )
}

export default RssLinks