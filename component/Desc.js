import React, {useEffect, useRef} from "react";
import styles from "../styles/Desc.module.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Link from 'next/link'

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

    //Images Animation
    tl.from(pigImage, 2, {y: 1280, ease: Power3.easeOut},'Start')
    .from(pigImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(foxImage, 2, {y: 1280, ease: Power3.easeOut}, .2)
    .from(foxImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(rabbitImage, 4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(rabbitImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(goatImage, 3.6, {y: 1280, ease: Power3.easeOut}, .2)
    .from(goatImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(dogImage, 3, {y: 1280, ease: Power3.easeOut}, .2)
    .from(dogImage.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])
  return (
    <div className={styles.hero} ref={el => app = el}>
      <div className={styles.container}>
        <div className={styles.heroinner}>
          <div className={styles.herocontent}>
            <div className={styles.herocontentinner} ref={el => content = el}>
              <h1>
                <div className={styles.herocontentline}>
                  <div className={styles.herocontentlineinner}>Established pest animals</div>
                </div>
                <div className={styles.herocontentline}>
                  <div className={styles.herocontentlineinner}>in the state of Victoria.</div>  
                </div>
                
              </h1>
              <p>
                These animals not only caused serious damage to the local ecological environment but also to the farmer’s economy. 
              </p>
              <div className={styles.btnrow}>

              <Link href='/animals'> 
                <button className={styles.explorebutton}>Learn More
                  <div className={styles.arrowicon}>
                    <img src="/arrow-right.svg" alt="row"/>              
                  </div>
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.heroimages}>
            <div ref={el => images = el}  className={styles.heroimagesinner}>

              <div className={styles.heroimage + " " + styles.pig}>
                <img src="/pig2.jpg" alt="pig"/>
              </div>

              <div className={styles.heroimage + " " + styles.fox}>
                <img src="/fox2.jpg" alt="fox" />
              </div>

              <div className={styles.heroimage + " " + styles.rabbit}>
                <img src="/rabbit2.jpg" alt="rabbit" />
              </div>
              
              <div className={styles.heroimage + " " + styles.goat}>
                <img src="/goat2.jpg" alt="goat" />
              </div>
              
              <div className={styles.heroimage + " " + styles.dog}>
                <img src="/dog2.jpg" alt="dog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Desc;
