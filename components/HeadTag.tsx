import Head from 'next/head';
import Author, { getAuthor } from '../classes/authorType';

interface HeadProps{
    image: string,
    title: string,
    description: string,
    keywords: string[],
    date: Date,
    url: string,
    author?: Author,
}
const defaultKeywords: string[] = ["indie", "Indie Games", "NextJS", "Developers", "Company", "games", "development", "developers", "blog", "documentation"]

const HeadTag: React.FC<HeadProps> = (props: HeadProps) =>{
    var keywords: string[] = [ ...defaultKeywords, ...props.keywords];
    var stringKeywords: string = keywords
        .join()
        .toLowerCase()
        .replaceAll(",", ", ");

    if(props.author === undefined){
        props.author = getAuthor('renato');
    }

  
    return(
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>{props.title}</title>

            <meta name="apple-mobile-web-app-title" content="Coding Ideas"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/icon/apple-touch-icon.png"/>
            <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/images/icon/apple-touch-icon.png"/>

            {/* MICROSOFT */}
            <meta  key="msapplication-TileColor" name="msapplication-TileColor" content="#382F60"/>
            <link key="icon32" rel="icon" type="image/png" sizes="32x32" href="/images/icon/favicon-32x32.png"/>
            <link key="icon16" rel="icon" type="image/png" sizes="16x16" href="/images/icon/favicon-16x16.png" />
            <link key="manifest" rel="manifest" href="/images/icon/site.webmanifest" />

            <meta charSet='utf-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#382F60" />
            <meta name="copyright" content="© 2022 Renato Cesar" />
            <meta name="creator" content="Renato Cesar"/>
            <meta name="author" content="Renato Cesar"/>

            <meta name="google-site-verification" content="amj1tyhcjvwNjY_pZi-WJjthO7eC5SyaZZCrmbb835M" />

            <meta name="description" content={props.description}/>
            <meta name="keywords" content={stringKeywords}/>
            <meta name="author" content={props.author?.name}/>
            <meta name="robots" content="index, follow"/>
            <meta name="googlebot" content="index, follow"/>
            
            

            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="blog"/>
            <meta property="og:url" content={props.url} />
            <meta property="og:title" content={props.title}/>
            <meta property="og:site_name" content="Coding Ideas"/>
            <meta property="og:description" content={props.description}/>
            <meta property="og:image" content={props.image}/>
            <meta property="og:image:type" content={`image/webp`} />
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/>
            <meta property="og:image:alt" content="Post cover image"/> 
            
            <meta property="blog:title" content={props.title}/>
            <meta property="blog:author" content={props.author? props.author.name : "renato"}/>
            <meta property="blog:published_time" content={props.date.toString()}/>
            <meta property="blog:tag" content={stringKeywords}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:website" content="@nerat0"/>
            <meta name="twitter:image" content={props.image}/>
            <meta name="twitter:title" content={props.title}/>
            <meta name="twitter:description" content={props.description}/>
            <meta name="twitter:creator" content={props.author?.twitter}/>
            <meta property="twitter:url" content={props.url}/>
            <meta property="twitter:domain" content="codingideas.vercel.app"/>
        </Head>
    )
}

export default HeadTag;