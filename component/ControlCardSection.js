import styles from '../styles/Control.module.css'
import { ControlCard } from './ControlCard'

export const ControlCardSection = () => {
    return (
        <div className={styles.controlSection}>
            <h1>Control Methods Available in Victoria</h1>
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
                <ControlCard
                    title={'Animal Welfare'}
                    sub={' There are various services available in Victoria that offer professional animal trapping services using modern and humane methods of capture for wild animal population reduction programs'}
                    img={'/welfare0.jpeg'}
                    url={'/control/welfare'}
                ></ControlCard>
            </div>
        </div>
    )
}