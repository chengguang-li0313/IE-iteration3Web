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
import style from "../styles/IntroText.module.scss"
import textStyle from "../styles/normalText.module.scss"
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
          <HeroTitle><div className={style.regulationHeroInfo1}>  We Help Secure Your Farm from Pest Animals </div> </HeroTitle>
          <HeroText>
          <div className={style.regulationHeroInfo}> 
               Pest animals have significant impact on agriculture in Victoria.
            </div>
          </HeroText>
          <HeroBtn>
          <a href='/map'> <Button primary dark to="Info" onMouseEnter={onHover} onMouseLeave={onHover}>
            <div className={textStyle.infoBlackNew}>
          Ferret Your Ferals {hover ? <ArrowForward/> : <ArrowRight/>}
          </div>
            </Button> </a> 
          </HeroBtn>
          {/* <a href='#impact'><BiDownArrowCircle size={40} color={'green'}/></a>  */}
          </TextContent>
        </HeroContent>
        
      </HeroContainer>
      
    </div>
  )
}
