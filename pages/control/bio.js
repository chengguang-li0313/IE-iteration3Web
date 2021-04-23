import styles from '../../styles/Control.module.css'
import { Layout } from "../../component/Layout";
import { ControlHero } from '../../component/ControlHero'
import { ControlCard } from '../../component/ControlCard'
import { YoutubePlayer } from "reactjs-media";
import { AnimalImpactCard } from '../../component/AnimalImpactCard'

export default function Conventional() {

  return (
    <Layout>
      <ControlHero></ControlHero>  
        <a href='/control' className={styles.backButton}>«Back</a>
        <div className={styles.conventionalContainer}>
            <h1>Biological Control Methods</h1>
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
                    <li>Biological control has no adverse effect on human health or the environment</li>
                    <li>Biological control is self-sustaining.</li>
                    <li>It can provide a long-term solution to a pest problem.</li>
                </ul>
            </div>
        </div>

        <div className={styles.conventionalContainer}>
            <h1>Some of the most commonly used Biological Control Methods</h1>
        </div>
        <div className={styles.controlMethodCardSection}>
            <AnimalImpactCard
                title={'RHD (Rabbit Haemorrhoid Disease)'}
                text={'rabbit haemorrhagic disease (RHD, also known as rabbit calicivirus disease) established itself in Australia and reduced rabbit numbers, especially in arid areas.'}
                img={'/rhd.jpeg'}
            ></AnimalImpactCard>
             <AnimalImpactCard
                title={'Myxomatosis'}
                text={'In the six months following the release of the virus, it was believed to have killed more than 90% of feral rabbits as it swept through the temperate zone.'}
                img={'/mxy.jpeg'}
            ></AnimalImpactCard>
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
                    title={'Control Services'}
                    sub={' There are various services available in Victoria that offer professional animal trapping services using modern and humane methods of capture for wild animal population reduction programs'}
                    img={'/controlService.jpeg'}
                    url={'/control/services'}
        ></ControlCard>
      </div>
    </Layout>
  )
}
