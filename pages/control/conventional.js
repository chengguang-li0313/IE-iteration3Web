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
            <h1>Conventional Control Method</h1>
        </div>
        <div className={styles.conventionalContainer}>
            <YoutubePlayer
                src="https://www.youtube.com/watch?v=fzKmnZynjD8" // Reqiured
                width={650}
                height={400}
            />
            <div className={styles.conventionalInfo}>
                <h1>Key Benefits</h1>
                <ul>
                    <li>Quick Deployment</li>
                    <li>Easily Available</li>
                    <li>Low Cost</li>
                </ul>
            </div>
        </div>

        <div className={styles.conventionalContainer}>
            <h1>Some Common Conventional Methods</h1>
        </div>
        <div className={styles.controlMethodCardSection}>
            <AnimalImpactCard
                title={'Shooting'}
                text={'Shooting is used to control animals, such as feral horses, feral pigs and feral goats. Where the control program must take place in rugged terrain and in vast remote areas, helicopters may be used'}
                img={'/shooting.jpeg'}
            ></AnimalImpactCard>
             <AnimalImpactCard
                title={'Baiting'}
                text={'Baiting of feral animals such as foxes, pigs and rabbits is usually done using the poison known as 1080. 1080 occurs naturally in native pea bushes in Western Australia.'}
                img={'/controlBaiting.jpeg'}
            ></AnimalImpactCard>
             <AnimalImpactCard
                title={'Trapping'}
                text={'A variety of traps are used for feral animal control. Traps include conventional cage traps, soft-catch traps and yards that may be created around watering holes to catch animals as they come in to drink.'}
                img={'/controlTrapping.jpeg'}
            ></AnimalImpactCard>
             <AnimalImpactCard
                title={'Fencing'}
                text={' Fencing for wildlife management has a long history in Australia with the introduction of netting fences for rabbit and dingo exclusion over 100 years ago.These fences also need continuous inspection and maintenance, which is expensive.'}
                img={'/controlFencing.jpeg'}
            ></AnimalImpactCard>
        </div>
    </>
  )
}
