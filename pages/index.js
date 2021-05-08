import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Nav } from '../component/Nav'
import { Intro } from '../component/Intro'
import { CardSection } from '../component/CardSection'
import  Desc  from '../component/Desc'
import { HomeControlSection } from '../component/HomeControlSection'
import { Footer } from '../component/Footer' 
import Regulation from '../component/Regulation';
import { MapHomepage } from '../component/MapHomepage' 

export default function Home() {

  return (
    <>
     {/* <div className={styles.container}> */}
       {/* <Nav></Nav> */}

       <Intro></Intro>
       {/* </div> */}

     <MapHomepage> </MapHomepage>
    <CardSection></CardSection>

    <Desc></Desc>

    <Regulation> </Regulation>

    <Footer></Footer>
    </>
  )
}
