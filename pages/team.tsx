import NextHead from 'next/head';
import { m, motion } from 'framer-motion'

import { slideInLeft } from '../helpers/animations';

const TeamPage = () => {

    return(
        <>
            <NextHead>
                <title>Coding Ideas Team</title>
                <meta name="description" content="Team page - Where you can read about our team"/>
                <meta name="author" content="Renato Cesar"></meta>
                <meta name="robots" content="follow"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta property="og:url" content="https://https://devblog-nine.vercel.app/team"></meta>
                <meta property="og:title" content="Coding Ideas Blog Page - Read our posts"></meta>
            </NextHead>
            <motion.div className='page' variants={slideInLeft}>
                <h1>Teams page</h1>
            </motion.div>
        </>
    )

}

export default TeamPage