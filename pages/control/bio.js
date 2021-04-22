import styles from '../../styles/Control.module.css'
import { Nav } from "../../component/Nav";
import { ControlHero } from '../../component/ControlHero'
import { YoutubePlayer } from "reactjs-media";
import { AnimalImpactCard } from '../../component/AnimalImpactCard'

export default function Conventional() {

  return (
    <>
        <Nav></Nav>
        <ControlHero></ControlHero>  
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
            <h1>Some Common Biological Methods</h1>
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
    </>
  )
}
