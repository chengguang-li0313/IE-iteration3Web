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
import Axios from "axios";
import React, { useState, useEffect} from "react";
import ScrollToTop from "react-scroll-up";

export default function Home() {
  
  //fetching data of Map 
  const [data, setData] = useState([]);

  useEffect(async () => {

    const result = await Axios.get(
      `https://ie-animal-api.herokuapp.com/api3/rabbit`
    );
    setData(result.data);
    //test print it out 
    // console.log(result.data.map(animal => (animal.lat)));

  }, []);  
  
  return (
    <>
     {/* <div className={styles.container}> */}
       {/* <Nav></Nav> */}

       <Intro></Intro>
       {/* </div> */}

      <MapHomepage data={data} > </MapHomepage>

     
    <CardSection></CardSection>

    <Desc></Desc>

    <Regulation> </Regulation>
    <ScrollToTop 
    showUnder={160}
    // easing="easeInExpo"
    duration={3000}
    cursor="pointer"

     >
    {/* <span>UP</span> */}
   
    {/* <span>   </span>    */}
    
    <img src="/upup.svg" width="30px" height="30px"/> 
    
    
  </ScrollToTop> 
    <Footer></Footer>
    </>
  )
}
