import styles from "../styles/Animals.module.css";
import cardStyles from '../styles/AnimalGrid.module.scss'
import { AnimalGridCard } from "./AnimalGridCard";
import { Accordion } from './Accordion'

export const AnimalGridSection = (props) => {
  const { data } = props;

  return (
    <Accordion title={'Biological Attributes'}>
      <div className={styles.infoSection}>
        <AnimalGridCard
          title={"Appearance"}
          desc={data.appearance}
        ></AnimalGridCard>

        <AnimalGridCard
          title={"Diet"}
          desc={data.diet}

        ></AnimalGridCard>

        <AnimalGridCard
          title={"Behaviour"}
          desc={data.behaviour}

        ></AnimalGridCard>
      </div>
      <div className={styles.infoSection}>
        <AnimalGridCard
          title={"Preffered Habitat"}
          desc={data.habitat}

        ></AnimalGridCard>

        <AnimalGridCard
          title={"Predation"}
          desc={data.prey}

        ></AnimalGridCard>
      </div>
    </Accordion>
  );
};
