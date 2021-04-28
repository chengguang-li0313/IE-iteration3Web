import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Nav } from '../component/Nav'
import { Intro } from '../component/Intro'
import { CardSection } from '../component/CardSection'
import  Desc  from '../component/Desc'
import { HomeControlSection } from '../component/HomeControlSection'
import { Footer } from '../component/Footer' 
import Regulation from '../component/Regulation';
export default function Home() {

  return (
    <>
     
       <Nav></Nav>

       <Intro></Intro>
     

    <CardSection></CardSection>

    <Desc></Desc>

    <h1 className={styles.homeControlTitle}>Generic Control Methods</h1>
    <HomeControlSection></HomeControlSection>
    <Regulation> </Regulation>

    <Footer></Footer>
    </>
  )
}
