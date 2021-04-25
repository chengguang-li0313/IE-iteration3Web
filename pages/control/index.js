import styles from '../../styles/Control.module.css'
import { Layout } from "../../component/Layout";
import { ControlCardSection } from '../../component/ControlCardSection'
import { ControlHero } from '../../component/ControlHero'
import { YoutubePlayer } from "reactjs-media";
import { ProgramCardSection } from '../../component/ProgramCardSection'

export default function Control() {

  return (
    <Layout>
        <ControlHero></ControlHero>
        <div className={styles.controlSection}>
            <h1>Why is it Important to Control These Species?</h1>
            <p>Established Pest Animals are a serious threat to primary production, crown land, the environment and/or human health in Victoria. Depending on the level of invasion threat posed by these animals, the intervention/management effectiveness and the cost vary which can be depicted from the figure given:</p>
            <img src='/invasion.png' className={styles.invasion}></img>
            <p>Under the Catchment and Land Protection Act, 1994 all landowners, farmers have a legal duty to prevent the spread of – and as far as possible eradicate – established pest animals. The recommended management of established pest animals is to minimise their impact on selected high-value agriculture and environmental assets. </p>
            <h1>Managing Established Pest Animals: What Can You Do</h1>
            <img src='/pestAnimalQuote.png' className={styles.invasion}/>
            <p>This video describes the best practices to keep in mind while developing and implementing a pest control plan:</p>
            <YoutubePlayer
            src="https://www.youtube.com/watch?v=JJEMr2pM4U0&t=102s&ab_channel=CentreforInvasiveSpeciesSolutions" // Reqiured
            width={700}
            height={400}
            className={styles.invasion}
            />
            <p>In order to reduce the impact caused by these animals, it is best to prevent them from occurring in the first place. As farmers, you can help stop the introduction and spread of invasive species by using the following methods:</p>
        </div>
        <ControlCardSection></ControlCardSection>
        <div className={styles.controlSection}>
            <h1>Integrated Pest Animal Control Programs</h1>
            <p>The Victorian Government has come up with different control programs to advise and guide on the strategies to implement in order to control established pest animals :</p>
            <ProgramCardSection></ProgramCardSection>
            <h1>Australian Pest Animal Strategy</h1>
            <p>The Australian Pest Animal Strategy was developed in 2007 as to provide national guidance on pest animal management, which is primarily the responsibility of the landholders of the state. It was revised in 2017 and is available as below:</p>
            <a href="#">Australian Pest Animal Strategy 2017-2027.pdf</a>
            <p>To learn more about strategies/regulations in place as provided by the Government</p> 
            <a href="/regulation">Click here.</a>
            <h2>References:</h2>
            <p>1. Centre for Invasive Species Solutions, 2014. Principles of pest animal management. Factsheet. PestSmart website. https://pestsmart.org.au/framework-overview/principles-of-pest-animal-management accessed 24-04-2121</p>
            <p>2. https://agriculture.vic.gov.au/biosecurity/protecting-victoria/legislation-policy-and-permits/managing-pest-animals</p>
        </div>
    </Layout>
  )
}
