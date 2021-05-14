import styles from "../styles/Animals.module.css";
import { Accordion } from './Accordion'
import { BioCard } from './BioCard'

export const AnimalGridSection = (props) => {
  const { data } = props;

  return (
    <Accordion title={'Biological Attributes'}>
      <div className={styles.infoSection}>
        <BioCard
         title={"Appearance"}
         desc={data.appearance}
         img={data.appearanceImage}
         >
        </BioCard>

        <BioCard
          title={"Diet"}
          desc={data.diet}
          img={data.image1}
        ></BioCard>

        <BioCard
          title={"Behaviour"}
          desc={data.behaviour}
          img={data.image2}
        ></BioCard>

        <BioCard
          title={"Preffered Habitat"}
          desc={data.habitat}
          img={data.image3}

        ></BioCard>

        <BioCard
          title={"Predation"}
          desc={data.prey}
          img={data.image4}

        ></BioCard>
      </div>
    </Accordion>
  );
};
