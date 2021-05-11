import styles from '../../styles/Control.module.css'
import { Layout } from "../../component/Layout";
import { ControlHero } from '../../component/ControlHero'
import { ControlCard } from '../../component/ControlCard'
import { YoutubePlayer } from "reactjs-media";
import { AnimalImpactCard } from '../../component/AnimalImpactCard'
import {ControlHeroNew } from '../../component/ControlHeroNew'
import { Footer } from '../../component/Footer'
import ScrollToTop from "react-scroll-up";
export default function Conventional() {

  return (
    <>
      {/* <ControlHero></ControlHero> */}
      <ControlHeroNew> </ControlHeroNew>
      <a href="/control" className={styles.backButton}>
        «Back
      </a>
      <div className={styles.conventionalContainer}>
        <h1>Control Services</h1>
      </div>
      <div className={styles.conventionalContainer}>
        <YoutubePlayer
          src="https://www.youtube.com/watch?v=mHXOefz8Pk0" // Reqiured
          width={650}
          height={400}
        />
        <div className={styles.conventionalInfo}>
          <h1>Key Benefits</h1>
          <ul>
            <li>Help to manage pest animal invasion over a large scale</li>
            <li>
              Free services available to control Pest Animals for Farmers,
              Land-owners
            </li>
            <li>
              Certified, fully licensed and insured company specializing in all
              Pest treatments
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.conventionalContainer}>
        <h1>Some of the Renowned Control Services Available in Victoria</h1>
      </div>
      <div className={styles.controlMethodCardSection}>
        <a href="https://www.victorianpestcontrol.com.au">
          <AnimalImpactCard
            title={"Victorian Pest Control"}
            text={
              "locally owned and operated Australian Business that offer complete termite and pest control services, guaranteed and hassle free. Contact Number : 0393833398"
            }
            img={"/pestControl.png"}
          ></AnimalImpactCard>
        </a>
        <a href="https://www.animalpest.com.au/services/">
          <AnimalImpactCard
            title={"Animal Pest Management Services"}
            text={
              "Offer a range of control services using modern and humane methods of capture for pest animals reduction program \n Contact Us: 1800 842 199"
            }
            img={"/management.png"}
          ></AnimalImpactCard>
        </a>
        <a href="https://www.melbournewildlifepestcontrol.com.au">
          <AnimalImpactCard
            title={"Melbourne Wildlife & Pest Control"}
            text={
              " Melbourne Wildlife and Pest Control has over 26 years experience in pest control and wildlife control management services and can effectively and can safely protect you against unwanted pests and wildlife. Contact Us :  0438 728 400"
            }
            img={"/melbWildlife.png"}
          ></AnimalImpactCard>
        </a>
        <a href="https://animalcontrol.com.au">
          <AnimalImpactCard
            title={"Animal Control Technologies Australia"}
            text={
              "Australia’s leading research and manufacturing company specialising in control of vertebrate pest animals including foxes, wild dogs, feral pigs, rabbits, plague mice, plague rats, some invasive ant species and cane toads. Contact: 03 9308 9688"
            }
            img={"/acta.png"}
          ></AnimalImpactCard>
        </a>
        <a href="https://animalcontrol.com.au">
          <AnimalImpactCard
            title={"Vertebrate Pest Management Association Australia"}
            text={
              "The Vertebrate Pest Management Association Australia (VPMAA) is an independent, not–for-profit association. Contact: 1300 257 774"
            }
            img={"/vpmaa.png"}
          ></AnimalImpactCard>
        </a>
      </div>
      <div className={styles.conventionalContainer}>
        <h1>Also Check Out These Methods</h1>
      </div>

      <div className={styles.conventionalContainer}>
        <ControlCard
          title={"Conventional Control Methods"}
          sub={
            "Conventional control methods for feral animals include trapping, baiting, fencing and shooting."
          }
          img={"/conventional.jpeg"}
          url={"/control/conventional"}
        ></ControlCard>
        <ControlCard
          title={"Biological Control Method"}
          sub={
            "These methods include using natural enemies of the pest and biologically interfering with their ability to breed. Pesticides are not used."
          }
          img={"/bioControl.jpeg"}
          url={"/control/bio"}
        ></ControlCard>
        <ControlCard
          title={"Animal Welfare"}
          sub={
            "These methods include using natural enemies of the pest and biologically interfering with their ability to breed. Pesticides are not used."
          }
          img={"/welfare0.jpeg"}
          url={"/control/welfare"}
        ></ControlCard>
      </div>
      <ScrollToTop 
    showUnder={160}
    // easing="easeInExpo"
    duration={3000}
    cursor="pointer"
     >    
    <img src="/upup.svg" width="30px" height="30px"/> 
  </ScrollToTop> 
 
      <Footer> </Footer>
        </>
  );
}
