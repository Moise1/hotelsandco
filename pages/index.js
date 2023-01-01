import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import "react-multi-carousel/lib/styles.css";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotels&amp;Co</title>
        <meta name="description" content="Hotels&Co" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar deviceType="desktop"/>
      <main className={styles.main}>
        
      </main>
    </>
  )
}
