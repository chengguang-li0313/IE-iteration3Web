import styles from "../../styles/Control.module.css";
import { Layout } from "../../component/Layout";
import { ControlCard } from '../../component/ControlCard'
import { YoutubePlayer } from "reactjs-media";
import { AnimalImpactCard } from "../../component/AnimalImpactCard";
import { ConventionalHero } from '../../component/ConventionalHero'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ScrollToTop from "react-scroll-up";


export default function Conventional() {
    return (
      <Layout>
        <ConventionalHero></ConventionalHero>
        <a href="/control" className={styles.backButton}>
          «Back
        </a>

        <div className={styles.conventionalContainer}>
        <h1>Conventional Control Services</h1>
      </div>

      <div className={styles.tabContainer}>
        <Tabs>
          <TabList>
            <Tab>Introduction </Tab>
            <Tab>Key Benefits </Tab>
            <Tab>Common Conventional Methods</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.conventionalText}>
              <div className={styles.conventionalContainer}>
                <YoutubePlayer
                  src="https://www.youtube.com/watch?v=fzKmnZynjD8" // Reqiured
                  width={650}
                  height={400}
                />
              </div>
              <p>
                Conventional Control Methods involves digging, flooding,
                destruction and removal of nests, hand-pulling, burning and
                general destruction of the invasive species by hand. This is
                most useful for small infestations and is the most
                environmentally friendly yet is the most labour intensive and
                least effective for larger populations.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.conventionalContainer}>
              <img src="/keyBenefit1.jpeg" className={styles.benefit}></img>
              <div className={styles.conventionalInfo}>
                <h1>Key Benefits</h1>
                <ul>
                  <li>Quick Deployment</li>
                  <li>Easily Available</li>
                  <li>Low Cost</li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.conventionalContainer}>
              <h1>Some Common Conventional Methods</h1>
            </div>
            <div className={styles.controlMethodCardSection}>
              <AnimalImpactCard
                title={"Shooting"}
                text={
                  "Shooting is used to control animals, such as feral horses, feral pigs and feral goats. Where the control program must take place in rugged terrain and in vast remote areas, helicopters may be used"
                }
                img={"/shooting.jpeg"}
              ></AnimalImpactCard>
              <AnimalImpactCard
                title={"Baiting"}
                text={
                  "Baiting of feral animals such as foxes, pigs and rabbits is usually done using the poison known as 1080. 1080 occurs naturally in native pea bushes in Western Australia."
                }
                img={"/controlBaiting.jpeg"}
              ></AnimalImpactCard>
              <AnimalImpactCard
                title={"Trapping"}
                text={
                  "A variety of traps are used for feral animal control. Traps include conventional cage traps, soft-catch traps and yards that may be created around watering holes to catch animals as they come in to drink."
                }
                img={"/controlTrapping.jpeg"}
              ></AnimalImpactCard>
              <AnimalImpactCard
                title={"Fencing"}
                text={
                  " Fencing for wildlife management has a long history in Australia with the introduction of netting fences for rabbit and dingo exclusion over 100 years ago.These fences also need continuous inspection and maintenance, which is expensive."
                }
                img={"/controlFencing.jpeg"}
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
          // easing="easeInExpo"
          duration={3000}
          cursor="pointer"
          >    
          <img src="/upup.svg" width="30px" height="30px"/> 
        </ScrollToTop> 
      </Layout>
    );
}
