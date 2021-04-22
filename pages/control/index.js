import styles from '../../styles/Control.module.css'
import { Nav } from "../../component/Nav";
import { ControlCard } from '../../component/ControlCard'
import { ControlHero } from '../../component/ControlHero'
 
export default function Control() {

  return (
    <>
        <Nav></Nav>
        <ControlHero></ControlHero>

        <div className={styles.controlSection}>
            <div className={styles.controlCards}>
                <ControlCard
                    title={'Conventional control methods'}
                    sub={'Conventional control methods for feral animals include trapping, baiting, fencing and shooting.'}
                    img={'/conventional.jpeg'}
                    url={'/control/conventional'}
                ></ControlCard>

                <ControlCard
                    title={'Biological Control Method'}
                    sub={'These methods include using natural enemies of the pest and biologically interfering with their ability to breed. Pesticides are not used.'}
                    img={'/bioControl.jpeg'}
                    url={'/control/bio'}
                ></ControlCard>
            </div>
            <div className={styles.controlCards}>
                <ControlCard
                    title={'Control Services'}
                    sub={' There are various services available in Victoria that offer professional animal trapping services using modern and humane methods of capture for wild animal population reduction programs'}
                    img={'/controlService.jpeg'}
                    url={'/control/services'}
                ></ControlCard>
            </div>
        </div>
    </>
  )
}
