import React, {useEffect, useRef} from "react";
import styles from "../styles/Desc.module.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Link from 'next/link'
import textStyle from "../styles/normalText.module.scss"
// import imgPig from "/pig2.jpg";
// import imgFox from "/fox2.jpg";
// import imgRabbit from "/rabbit2.jpg";
// import imgGoat from "/goat2.jpg";
// import imgDog from "/dog2.jpg";

// import arrow from './images/arrow.jpg'

function Desc() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
    // Images Vars
    const pigImage = images.children[0]; 
    const foxImage = images.children[1];
    const rabbitImage = images.children[2];
    const goatImage = images.children[3];
    const dogImage = images.children[4];  

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    // //Images Animation
    // tl.from(pigImage, 0.5, {y: 80, ease: Power3.easeOut},'Start')
    // .from(pigImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    // .from(foxImage, 0.6, {y: 100, ease: Power3.easeOut}, .2)
    // .from(foxImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    // .from(rabbitImage, 0.9, {y: 200, ease: Power3.easeOut}, .2)
    // .from(rabbitImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    // .from(goatImage, 1, {y: 170, ease: Power3.easeOut}, .2)
    // .from(goatImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    // .from(dogImage, 0.8, {y: 200, ease: Power3.easeOut}, .2)
    // .from(dogImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    // //Content Animation
    // tl.staggerFrom([headlineFirst.children, headlineSecond.children ], 1, {
    //   y: 44,
    //   ease:Power3.easeOut,
    //   delay: .8
    // }, .15, 'Start')
    // .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    // .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])
  
  return (
    <div className={styles.hero} ref={el => app = el}>
      <div className={styles.container}>
        <div className={styles.heroinner}>
          <div className={styles.herocontent}>
            <div className={styles.herocontentinner} ref={el => content = el}>
              <h1>
                <div className={styles.herocontentline}>
                  <div className={styles.herocontentlineinner}>  <div className={textStyle.infoBlack}> Established pest animals</div> </div>
                </div>
                
                <div className={styles.herocontentline}>
                  <div className={styles.herocontentlineinner}> <div className={textStyle.infoBlack}> in the Victoria.</div> </div> 
                </div>
                
              </h1>
              <p>
              <div className={textStyle.infoBlack}>
                These animals not only caused serious damage to the local ecological environment but also to the farmer’s economy. 
                </div>  
              </p>


          {/* 
              <div className={styles.btnrow}>
              <Link href='/animals'> 
                <button className={styles.button}>  Learn More 
                  <div className={styles.arrowicon}>
                    <img src="/arrow-right.svg" alt="row"/>              
                  </div>
                </button>
                </Link>
              </div> */}
           
             <div className={styles.buttonNew}>
              
             <div className={styles.buttonLine}> <hr/></div> 
                <a href='/animals'>               
                   <button className={styles.buttonText}>  
                                     
                   <div className={textStyle.infoBlack}> LEARN MORE 
                   </div>    
                   <div className={styles.buttonIcon}>  <img src="/arrow-right.svg" alt="row"/>  </div>       
                   </button>       
                   </a>   
             </div>  
            
            



            </div>
          </div>
          <div className={styles.heroimages}>
            <div ref={el => images = el}  className={styles.heroimagesinner}>

              <div className={styles.heroimage + " " + styles.pig}>
              <div className={styles.containerInfo + " " + styles.containerLocation}> Pig </div> 
              </div>

              <div className={styles.heroimage + " " + styles.fox}>
              <div className={styles.containerInfo + " " + styles.containerLocation}> Fox </div> 
              </div>

              <div className={styles.heroimage + " " + styles.rabbit}>
              <div className={styles.containerInfo + " " + styles.containerLocation}> Rabbit </div> 
              </div>
              
              <div className={styles.heroimage + " " + styles.goat}>
              <div className={styles.containerInfo + " " + styles.containerLocation}> Goat </div> 
              </div>
              
              <div className={styles.heroimage + " " + styles.dog}>
              <div className={styles.containerInfo + " " + styles.containerLocation}> Dog </div>               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Desc;
