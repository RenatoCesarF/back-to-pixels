import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <Link href={`/blog`}><a>to blog
    </a></Link>
  )
}

export default Home;
