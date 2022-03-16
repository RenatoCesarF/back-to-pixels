import Head from 'next/head';
import Author from '@classes/authorType';
import WEBSITE_INFO from '@helpers/webSiteInfo';

interface HeadProps{
    image: string,
    title: string,
    description: string,
    keywords: string[],
    date: Date,
    url: string,
    author?: Author,
};
const defaultKeywords: string[] = ["indie", "Indie Games", "NextJS", "Developers", "Company", "games", "development", "developers", "blog", "documentation"]
const defaultIconPath: string = "/images/icon";
const mainColor: string = "#382F60"

const HeadTag: React.FC<HeadProps> = (props: HeadProps) =>{
    var keywords: string[] = [ ...defaultKeywords, ...props.keywords];
    var stringKeywords: string = keywords.join().toLowerCase();
    const twitterDomain = WEBSITE_INFO.URL.slice(8);
    const imageURL = `${WEBSITE_INFO.URL}${props.image}`;

    return(
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
            <title>{props.title}</title>

            <meta name="apple-mobile-web-app-title" content={WEBSITE_INFO.NAME}/>
            <meta name="apple-mobile-web-app-status-bar" content={mainColor} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${defaultIconPath}/apple-touch-icon.png`}/>
            <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href={`${defaultIconPath}/apple-touch-icon.png`}/>
            <link rel="apple-touch-icon" href={`/images/logo/sizes/logo-96x96.png`} />

            {/* MICROSOFT */}
            <meta  key="msapplication-TileColor" name="msapplication-TileColor" content={mainColor}/>
            <link key="icon32" rel="icon" type="image/png" sizes="32x32" href={`${defaultIconPath}/favicon-32x32.png`}/>
            <link key="icon16" rel="icon" type="image/png" sizes="16x16" href={`${defaultIconPath}/favicon-16x16.png"`}/>

            <meta charSet='utf-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content={mainColor} />
            <meta name="copyright" content="© 2022 Renato Cesar" />
            <meta name="creator" content="Renato Cesar"/>
            <meta name="author" content="Renato Cesar"/>

            <meta name="google-site-verification" content="amj1tyhcjvwNjY_pZi-WJjthO7eC5SyaZZCrmbb835M" />

            <meta name="description" content={props.description}/>
            <meta name="keywords" content={stringKeywords}/>
            <meta name="author" content={props.author ? props.author.name : "Renato Cesar"}/>
            <meta name="robots" content="index, follow"/>
            <meta name="googlebot" content="index, follow"/>
            
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="blog"/>
            <meta property="og:url" content={WEBSITE_INFO.URL + props.url} />
            <meta property="og:title" content={props.title}/>
            <meta property="og:site_name" content={WEBSITE_INFO.NAME}/>
            <meta property="og:description" content={props.description}/>
            <meta property="og:image" content={imageURL}/>
            <meta property="og:image:type" content={`image/webp`} />
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/>
            <meta property="og:image:alt" content="Post cover image"/> 
            
            <meta property="blog:title" content={props.title}/>
            <meta property="blog:author" content={props.author ? props.author.name : "Renato Cesar"}/>
            <meta property="blog:published_time" content={props.date.toString()}/>
            <meta property="blog:tag" content={stringKeywords}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:website" content="@nerat0"/>
            <meta name="twitter:image" content={imageURL}/>
            <meta name="twitter:title" content={props.title}/>
            <meta name="twitter:description" content={props.description}/>
            <meta name="twitter:creator" content={props.author?.twitter}/>
            <meta property="twitter:url" content={imageURL}/>
            <meta property="twitter:domain" content={twitterDomain}/>
        </Head>
    )
}

export default HeadTag;