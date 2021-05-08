import styles from '../styles/Home.module.css'
import { BiDownArrowCircle } from 'react-icons/bi'
import React, { useState} from 'react'
import { Nav } from '../component/Nav'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroBtn,
  ArrowForward,
  ArrowRight,
  TextContent
} from '../styles/hero.module.js'
import {Button} from '../styles/button.module.js'

export const Intro = () => {
  const [hover, setHover] = useState(false);

  const onHover = ()=> setHover(!hover);
  return (
    <div>
      <HeroContainer id="homepage hero" >              
        <HeroBg>
          {/* <video playsInline muted autoPlay loop controls src='/video.mp4' type="video/mp4" width="1600px"/> */}
          <VideoBg autoPlay muted playsInline loop>     
            <source src='/video.mp4'type='video/mp4'></source>
          </VideoBg>
          {/* <VideoBg/> */}
        </HeroBg>

        <HeroContent>
        <Nav></Nav>
        <TextContent>
          <HeroTitle>We help secure your farm from Pest Animals</HeroTitle>
          <HeroText>
            Pest Animals have significant impact on Agriculture in Victoria.
          </HeroText>
          <HeroBtn>
          <a href='#map'> <Button primary dark to="Info" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button> </a> 
          </HeroBtn>
          {/* <a href='#impact'><BiDownArrowCircle size={40} color={'green'}/></a>  */}
          </TextContent>
        </HeroContent>
        
      </HeroContainer>
      
    </div>
  )
}
