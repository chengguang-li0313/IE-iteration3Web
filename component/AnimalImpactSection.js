import { AnimalImpactCard } from './AnimalImpactCard'
import styles from '../styles/Animals.module.css'
import { Accordion } from './Accordion'

export const AnimalImpactSection = (props) => {
    const {data} = props;

    return (
      <Accordion title={'How Does The Pest Impact You?'}>
        <div className={styles.animalImpactSection}>
        <AnimalImpactCard
          img={"ecosystem.jpeg"}
          title={"Impact to Ecosystem"}
          text={data.ecosystemImpact}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={"economics.jpeg"}
          title={"Impact to Economics"}
          text={data.economicImpact}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={"health.jpeg"}
          title={"Impact To Social Health"}
          text={data.healthImpact}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={"agriculture.jpeg"}
          title={"Impact to Agriculture"}
          text={data.agricultureImpact}
        ></AnimalImpactCard>
      </div>
      </Accordion>
    )
};
