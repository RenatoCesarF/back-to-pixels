
import webSiteInfo from '../utils/webSiteInfo';


const RssLinks = () =>{
    const baseURL: string = `${webSiteInfo.defaultURL}/rss`
    return (
        <div className="rss-feed-container">
            <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href={`${baseURL}/atom.xml`}>Atom Feed</a>
            <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href={`${baseURL}/feed.json`}>Json Feed</a>
            <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href={`${baseURL}/feed.xml`}>RSS Feed</a>
        </div>
    )
}

export default RssLinks