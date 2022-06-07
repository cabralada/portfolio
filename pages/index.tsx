import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import itsme from '../public/me.jpg'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.me}>
          <Image alt="Cesar Cabral Picture" src={itsme} layout='fill'
    objectFit='contain'/>
        </div>

        <h1 className={styles.title}>
          <strong>Cesar</strong>
          <strong>Cabral</strong>
        </h1>
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design by Cesar Cabral - Since 2005
        </a>
      </footer>
    </div>
  )
}

export default Home
