import NextHead from 'next/head';
import { m, motion } from 'framer-motion'

import { slideInLeft } from '../helpers/animations';
import InDevelopment from '../components/InDevelopment';

const TeamPage = () => {

    return(
        <>
            <NextHead>
                <title>Coding Ideas Team</title>
                <meta name="description" content="Team page - Read about our team"/>
                <meta name="robots" content="follow"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta property="og:url" content="https://https://devblog-nine.vercel.app/team"></meta>
                <meta property="og:title" content="Coding Ideas Blog Page - Read our posts"></meta>
            </NextHead>
                <div className='page'>
                <motion.div  variants={slideInLeft}>
                    <h1>Teams page</h1>
                </motion.div>
                <InDevelopment/>
            </div>
        </>
    )

}

export default TeamPage