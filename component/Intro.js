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
      <HeroContainer id="homepage hero">              
        <HeroBg>
          <VideoBg src='/video.mp4' autoPlay muted playsInline loop/>
        </HeroBg>

        <HeroContent>
        <Nav></Nav>
        <TextContent>
          <HeroTitle>We help secure your farm from Pest Animals</HeroTitle>
          <HeroText>
            Pest Animals have significant impact on Agriculture in Victoria.
          </HeroText>
          <HeroBtn>
          <a href='#impact'> <Button primary dark to="Info" onMouseEnter={onHover} onMouseLeave={onHover}>
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
