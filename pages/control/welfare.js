import styles from '../../styles/Control.module.css'
import { ControlCard } from '../../component/ControlCard'
import { Layout } from "../../component/Layout";
import { ControlHero } from '../../component/ControlHero'
import {ControlHeroNew } from '../../component/ControlHeroNew'
import { YoutubePlayer } from "reactjs-media";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ScrollToTop from "react-scroll-up";
import { Footer } from '../../component/Footer'
import { WelfareArrowTab } from '../../component/WelfareArrowTab'

export default function Welfare() {
    return (
      <>
        <ControlHeroNew></ControlHeroNew>

        <div className={styles.conventionalContainer}>
          <h1>Animal Welfare</h1>
        </div>

        <div className={styles.tabContainer}>

        <WelfareArrowTab
          tab1={<div className={styles.conventionalText}>
          <div className={styles.conventionalContainer}>
            <YoutubePlayer
              src="https://www.youtube.com/watch?v=Q_TG7YPW_gM" // Reqiured
              width={650}
              height={400}
            />
          </div>
          <p>By Peninsula Pest Management Pty Ltd</p>
          <p>
            Consideration of animal welfare in the management of invasive
            animals is essential to ensure that control techniques are
            performed humanely. The welfare of native animals, and their
            conservation, is often neglected when control programs or
            methods are opposed due to animal welfare impacts on invasive
            species. Therefore, while controlling and eradicating pest
            animals from your farm, it is of the utmost importance that in
            order to save your land from impacting agriculture and
            livestock, it is equally important to make sure that no other
            animals are harmed/injured while conducting pest control
            activities.
          </p>
        </div>}
        tab2={
          <div className={styles.conventionalContainer}>
              <img src="/ethics.png" className={styles.benefit}></img>
              <div className={styles.conventionalInfo}>
                <p>
                  Most of the arguments used to justify the need for good animal
                  welfare practices have little relevance to the invasive
                  species conundrum. It is a topic that has largely been left
                  out in the cold because the community is never confronted with
                  the impacts of pest management practices—be they trapping,
                  gassing, or poisons like 1080—there is no significant
                  challenge nor demand for research to garner better approaches.
                  Thus, as farmers, there is definitely a need to eradicate pest
                  animals, but we also need to understand that the way to do so
                  should be as humane and kind as possible{" "}
                </p>
              </div>
            </div>
        }
        tab3={
          <div className={styles.conventionalContainer}>
          <img src="/humanPest.jpeg" className={styles.benefit}></img>
          <div className={styles.conventionalInfo}>
            <p>
              The Victorian Government has come up with different strategies
              to minimise damage to other animals/nature while conducting
              pest control which is called as the Humane Vertebrate pest
              control. Humane Vertebrate Pest is the development and
              selection of feasible control programs and techniques that
              avoid or minimise pain, suffering and distress to target and
              non-target animals in vertebrate pest control programs.
            </p>
          </div>
        </div>
        }
        ></WelfareArrowTab>

        </div>

        <div className={styles.conventionalContainer}>
          <h1>Also Check Out These Methods</h1>
        </div>

        <div className={styles.conventionalContainer}>
          <ControlCard
            title={"Biological Control Method"}
            sub={
              "These methods include using natural enemies of the pest and biologically interfering with their ability to breed. Pesticides are not used."
            }
            img={"/bioControl.jpeg"}
            url={"/control/bio"}
          ></ControlCard>
          <ControlCard
            title={"Control Services"}
            sub={
              " There are various services available in Victoria that offer professional animal trapping services using modern and humane methods of capture for wild animal population reduction programs"
            }
            img={"/controlService.jpeg"}
            url={"/control/services"}
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
    easing="linear"
    duration={3000}
    cursor="pointer"
     >    
    <img src="/upup.svg" width="30px" height="30px"/> 
    </ScrollToTop> 
            <Footer></Footer>
      </>
    );
}