import { AnimalImpactCard } from './AnimalImpactCard'
import { CardWithButton } from './CardWithButton'
import styles from '../styles/Home.module.css'

export const HomeControlSection = () => {
    return (
      <div className={styles.cardSection}>
        <CardWithButton
          title={"Conventional Controls Methods"}
          text={
            "Conventional Control Methods kill a pest directly or make the environment unsuitable for it and includes trapping, baiting, fencing and shooting"
          }
          img={"/conventional.jpeg"}
          href={'/control/conventional'}
        ></CardWithButton>
        <CardWithButton
          title={"Biological Control Methods"}
          text={
            "Biological control is the management of a pest through the use of their natural enemies (biological control agent)."
          }
          img={"/bioControl.jpeg"}
          href={'/control/bio'}
        ></CardWithButton>
        <CardWithButton
          title={"Control Services"}
          text={
            "There are various services available in Victoria that offer professional animal trapping services using modern and humane methods of capture for wild animal population reduction programs"
          }
          img={"/controlService.jpeg"}
          href={'/control/services'}
        ></CardWithButtonig>
      </div>
    );
}