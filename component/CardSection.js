import { ImpactCard } from "../component/ImpactCard";
import styles from "../styles/Home.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const CardSection = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
      }
    };
    return (
      <>
        <div className={styles.heading} id='impact'>
          <h1>Why are Invasive Species Harmful to Agriculture?</h1>
          <p>In 2009, it was estimated that Invasive Animals have cost</p>
          <h1>$743.5 million via</h1>
        </div>

        <Carousel 
        responsive={responsive}
        showDots={true}
        >
            <ImpactCard
              title={"Contribution To Erosion"}
              img={"/carousel-1.jpeg"}
              desc={`One of the major adverse impacts of invasive animals is erosion. They cause
                  significant damage to farmlands that trigger immense landslides and soil loss.`}
            ></ImpactCard>
            <ImpactCard
              title={"Predation on Livestock"}
              img={"/carousel-2.jpeg"}
              desc={`Invasive Animals kill livestock and native animals in many places around Victoria by preying on them.`}
            ></ImpactCard>
            <ImpactCard
              title={"Spreading Weed"}
              img={"/carousel-3.jpeg"}
              desc={`Invasive species impact farm productivity by spreading weeds by dropping weed seeds on their way. Presence of weeds on farmlands increases the cost of agriculture and hinders the progress of work`}
            ></ImpactCard>
            <ImpactCard
              title={"Grazing on Crops and Pasture"}
              img={"/carousel-4.jpeg"}
              desc={`Invasive Animals have spread across Australia to the point where they cause severe damage to farmlands by grazing pressure on pastures, crops and native plant communities.`}
            ></ImpactCard>
            <ImpactCard
              title={"Water and Land Degradation"}
              img={"/carousel-5.jpeg"}
              desc={`Without control on farmlands, these animals become pests and injure the land and water causing them to degrade – thereby reducing the overall productivity of Agriculture`}
            ></ImpactCard>
          </Carousel>
      </>
    );
};
