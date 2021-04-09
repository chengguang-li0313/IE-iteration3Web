import { Card } from "../component/Card";
import styles from "../styles/Home.module.css";

export const CardSection = () => {
    return (
      <>
        <div className={styles.heading}>
          <h1>Why are Invasive Species Harmful to Agriculture?</h1>
          <p>In 2009, it was estimated that Invasive Animals have cost</p>
          <h1>$743.5 million</h1>
        </div>

        <div className={styles.cardSection}>
          <Card
            title={"Contribution To Erosion"}
            img={"/carousel-1.jpeg"}
            desc={`One of the major adverse impacts of invasive animals is erosion. They cause
                significant damage to farmlands that trigger immense landslides and soil loss.`}
          ></Card>

          <Card
            title={"Predation on Livestock"}
            img={"/carousel-2.jpeg"}
            desc={`Invasive Animals kill livestock and native animals in many places around
                Victoria by preying on them.`}
          ></Card>

          <Card
            title={"Spreading Weeds"}
            img={"/carousel-3.jpeg"}
            desc={`Invasive species impact farm productivity by spreading weeds by
                dropping weed seeds on their way. Presence of weeds on farmlands increases the
                cost of agriculture and hinders the progress of work`}
          ></Card>

          <Card
            title={"Grazing on Crops and Pasture"}
            img={"/carousel-4.jpeg"}
            desc={`Invasive Animals have spread across Australia to the point where they
                cause severe damage to farmlands by grazing pressure on pastures, crops and native
                plant communities.`}
          ></Card>

          <Card
            title={"Land and Water Degradation"}
            img={"/carousel-5.jpeg"}
            desc={`Without control on farmlands, these animals become pests and injure the land and
                water causing them to degrade – thereby reducing the overall productivity of
                Agriculture`}
          ></Card>
        </div>
      </>
    );
};
