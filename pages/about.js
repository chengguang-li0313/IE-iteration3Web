import Head from 'next/head'
import styles from '../styles/About.module.css'
import { Footer } from '../component/Footer' 
import { AboutArrowTab } from '../component/AboutArrowTab'
import {AboutHero} from '../component/AboutHero'
import ScrollToTop from "react-scroll-up";
export default function Home() {

  return (
     <> 
    <AboutHero> </AboutHero>
    <AboutArrowTab></AboutArrowTab>
        <ScrollToTop 
    showUnder={160}
    // easing="easeInExpo"
    duration={3000}
    cursor="pointer"
     >    
    <img src="/upup.svg" width="30px" height="30px"/> 
        </ScrollToTop> 
        <Footer></Footer>
    </>
  )
}
