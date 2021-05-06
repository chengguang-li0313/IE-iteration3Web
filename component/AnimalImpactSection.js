import { AnimalImpactCard } from './AnimalImpactCard'
import styles from '../styles/Animals.module.css'
import { Accordion } from './Accordion'
import Carousel from "react-multi-carousel";

export const AnimalImpactSection = (props) => {
    const {data} = props;

    const responsive = {
      superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1500 },
          items: 3,
      },
      desktop: {
          breakpoint: { max: 1500, min: 1024 },
          items: 2,
      },
      tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
      },
      mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
      },
  };


    return (
      <Accordion title={'How Does The Pest Impact You?'}>
        <Carousel 
            responsive={responsive} 
            showDots={true}
            > 
        <AnimalImpactCard
          img={"ecosystem.jpeg"}
          title={"Impact to Ecosystem"}
          text={data.ecosystemImpact}
        ></AnimalImpactCard>
        <AnimalImpactCard
          img={"economics.jpeg"}
          title={"Impact to Economy"}
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
        </Carousel>
      </Accordion>
    )
};
