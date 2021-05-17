import styles from '../../styles/Control.module.css'
import { Layout } from "../../component/Layout";
import { BioControlHero } from '../../component/BioControlHero'
import { ControlCard } from '../../component/ControlCard'
import { YoutubePlayer } from "reactjs-media";
import { AnimalImpactCard } from '../../component/AnimalImpactCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ScrollToTop from "react-scroll-up";

export default function Conventional() {

  return (
    <Layout>
      <BioControlHero></BioControlHero>

      <div className={styles.conventionalContainer}>
        <h1>Biological Control</h1>
      </div>

        <div className={styles.tabContainer}>

      <Tabs>
        <TabList className={styles.tabs}>
          <Tab>Introduction </Tab>
          <Tab>Key Benefits </Tab>
          <Tab>Common Biological Methods</Tab>
        </TabList>

        <TabPanel className={styles.tabPanel}>
          <div className={styles.conventionalContainer}>
            <YoutubePlayer
              src="https://www.youtube.com/watch?v=mHXOefz8Pk0" // Reqiured
              width={650}
              height={400}
            />
            <p>By Koppert Biological Systems</p>
          </div>
          <div className={styles.conventionalText}>
            <p>
              Biological methods to control pests include the use of natural
              predators, parasites and disease-carrying bacteria or viruses.
              Myxomatosis and rabbit calicivirus disease are examples of
              biological controls that have been used in Australia to control
              feral rabbits.
            </p>
          </div>
        </TabPanel>
        <TabPanel className={styles.tabPanel}>
        <div className={styles.conventionalContainer}>
              <img src="/keyBenefit2.jpeg" className={styles.benefit}></img>
          <div className={styles.conventionalInfo}>
            <h1>Key Benefits</h1>
            <ul>
              <li>
                Biological control has no adverse effect on human health or the
                environment
              </li>
              <li>Biological control is self-sustaining.</li>
              <li>It can provide a long-term solution to a pest problem.</li>
            </ul>
          </div>
        </div>
        </TabPanel>
        <TabPanel className={styles.tabPanel}>
          <div className={styles.conventionalContainer}>
            <h1>Some of the Most Commonly Used Biological Control Methods</h1>
          </div>
          <div className={styles.controlMethodCardSection}>
            <AnimalImpactCard
              title={"RHD (Rabbit Haemorrhoid Disease)"}
              text={
                "Rabbit haemorrhagic disease (RHD, also known as rabbit calicivirus disease) established itself in Australia and reduced rabbit numbers, especially in arid areas."
              }
              img={"/rhd.jpeg"}
            ></AnimalImpactCard>
            <AnimalImpactCard
              title={"Myxomatosis"}
              text={
                "In the six months following the release of the virus, it was believed to have killed more than 90% of feral rabbits as it swept through the temperate zone."
              }
              img={"/mxy.jpeg"}
            ></AnimalImpactCard>
          </div>
        </TabPanel>
      </Tabs>
      </div>

      <div className={styles.conventionalContainer}>
        <h1>Also Check Out These Methods</h1>
      </div>

      <div className={styles.conventionalContainer}>
        <ControlCard
          title={"Conventional control methods"}
          sub={
            "Conventional control methods for feral animals include trapping, baiting, fencing and shooting."
          }
          img={"/conventional.jpeg"}
          url={"/control/conventional"}
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

    </Layout>
  )
}
