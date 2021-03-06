import styles from '../../styles/Control.module.css'
import { Layout } from "../../component/Layout";
import { ControlCardSection } from '../../component/ControlCardSection'
import { YoutubePlayer } from "reactjs-media";
import { ProgramCardSection } from '../../component/ProgramCardSection'
import { Footer } from '../../component/Footer'
import {ControlHeroNew } from '../../component/ControlHeroNew'
import ScrollToTop from "react-scroll-up";
export default function Control() {

  return (
    // <Layout>
    <>
      {/* <ControlHero></ControlHero> */}
      <ControlHeroNew> </ControlHeroNew>
      <div className={styles.controlSection}>
        <h1>Why is it Important to Control These Species?</h1>
        <div className={styles.controlRow}>
          <div>
            <p>
              Established Pest Animals are a serious threat to primary
              production, crown land, the environment and/or human health in
              Victoria. Depending on the level of invasion threat posed by these
              animals, the intervention/management effectiveness and the cost
              vary which can be depicted from the figure given:
            </p>
            <p>
              Under the Catchment and Land Protection Act, 1994 all landowners,
              farmers have a legal duty to prevent the spread of – and as far as
              possible eradicate – established pest animals. The recommended
              management of established pest animals is to minimise their impact
              on selected high-value agriculture and environmental assets.{" "}
            </p>
          </div>
          <img src="/invasion.png" className={styles.invasion}></img>
        </div>
      </div>

      <div className={styles.controlVideo}>
        <h1 className={styles.h1Right}>
          Managing Established Pest Animals: What Can You Do
        </h1>
        <p>
          This video describes the best practices to keep in mind while
          developing and implementing a pest control plan:
        </p>
        <h1 className={styles.h1Right}>Principles of Best Practice Pest Animal Management</h1>

        <YoutubePlayer
          src="https://www.youtube.com/watch?v=JJEMr2pM4U0" // Reqiured
          width={700}
          height={400}
        />
        <p>By Centre for Invasive Species Solutions</p>
        <img src="/pestAnimalQuote.png" className={styles.invasion} />
      </div>

      <div className={styles.controlSection}>
        <h1>Control Methods Available in Victoria</h1>
        <p>
          In order to reduce the impact caused by these animals, it is best to
          prevent them from occurring in the first place. As farmers, you can
          help stop the introduction and spread of invasive species by using the
          following methods:
        </p>
        <ControlCardSection></ControlCardSection>
      </div>

      <div className={styles.controlProgram}>
        <h1 className={styles.h1Right}>
          Integrated Pest Animal Control Programs
        </h1>
          <p>
            The Victorian Government has come up with different control programs
            to advise and guide on the strategies to implement in order to
            control established pest animals :
          </p>
          <ProgramCardSection></ProgramCardSection>
          
      </div>

      <div className={styles.controlRow}>
        <div className={styles.controlSection}>
          <h1>Australian Pest Animal Strategy</h1>
          <img src="/pestStrategy.jpeg"></img>
          <p>
            The Australian Pest Animal Strategy was developed in 2007 as to
            provide national guidance on pest animal management, which is
            primarily the responsibility of the landholders of the state. It was
            revised in 2017 and is available as below:
          </p>
          <a className={styles.download} href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiYpu7um7_wAhVQgtgFHRAtCC0QFjABegQIAxAD&url=https%3A%2F%2Fwww.agriculture.gov.au%2Fsites%2Fdefault%2Ffiles%2Fsitecollectiondocuments%2Fpests-diseases-weeds%2Fconsultation%2Fapas-final.docx&usg=AOvVaw1JHnMA8XuQc4Jn00MP0gz6" target="blank" >Download Australian Pest Animal Strategy 2017-2027</a>
        </div>
      </div>
      {/* 
    </Layout> */}
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
