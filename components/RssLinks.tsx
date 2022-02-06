const RssLinks = () =>{

    return (
        <div className="rss-feed-container">
            <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href='rss/atom.xml'>Atom Feed</a>
            <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href='rss/feed.json'>Json Feed</a>
            <a target="_blank" rel="noopener noreferrer" className="rss-feed-link" href='rss/feed.xml'>RSS Feed</a>
        </div>
    )
}

export default RssLinks