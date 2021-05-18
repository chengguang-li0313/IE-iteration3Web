import styles from "../styles/Animals.module.css";
import { Accordion } from './Accordion'
import { BioCard } from './BioCard'
import Carousel from "react-multi-carousel";
import { AnimalImpactCard } from './AnimalImpactCard'

export const AnimalGridSection = (props) => {
  const { data } = props;

  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1500 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
  };

  return (
    <Accordion title={'Biological Attributes'}>
       <Carousel 
            responsive={responsive} 
            showDots={true}
            > 
        <AnimalImpactCard
          img={data.appearanceImage}
          title={"Appearance"}
          text={data.appearance}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={data.image1}
          title={"Diet"}
          text={data.diet}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={data.image2}
          title={"Behaviour"}
          text={data.behaviour}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={data.image3}
          title={"Preffered Habitat"}
          text={data.habitat}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={data.image4}
          title={"Predation"}
          text={data.prey}
        ></AnimalImpactCard>
        </Carousel>
    </Accordion>
  );
};
