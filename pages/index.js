import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Nav } from '../component/Nav'
import { Intro } from '../component/Intro'
import { CardSection } from '../component/CardSection'
import { Desc } from '../component/Desc'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Feral Animals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <img className={styles.introImg} src='/carousel-0.jpeg'></img> */}
      <Nav></Nav>

      <Intro></Intro>
    </div>

    <CardSection></CardSection>

    <Desc></Desc>

    </>
  )
}
