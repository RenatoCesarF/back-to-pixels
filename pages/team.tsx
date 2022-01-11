import next from 'next'
import Head from 'next/head'

const TeamPage = () => {

    return(
        <>
            <Head>
                <meta name="description" content="Team page - Where you can read about our team"/>
                <meta name="author" content="Renato Cesar"></meta>
                <meta name="robots" content="follow"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <title>CompanyName Team</title>
            </Head>
            <div className='page'>
                <h1>Teams page</h1>
            </div>
        </>
    )

}

export default TeamPage