import { Layout } from "../../component/Layout";
import styles from "../../styles/Animals.module.css";
import homeStyles from "../../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { AnimalImpactSection } from "../../component/AnimalImpactSection";
import { AnimalGridSection } from "../../component/AnimalGridSection";
import { Menu } from "semantic-ui-react";
import { BioInfoSection } from "../../component/BioInfoSection";
import { AnimalControlSection } from '../../component/AnimalControlSection'

export default function Animals() {
  const [data, setData] = useState("");
  const [controlData, setControlData] = useState('')

  useEffect(async () => {
    const result = await axios.get(
      "https://ie-iteration1.herokuapp.com/api/fox"
    );

    const controlResult = await axios.get(
      `https://ie-iteration2.herokuapp.com/api2/fox`
    )

    setData(result.data);
    setControlData(controlResult.data)
  }, []);

  const handleClick = async (e, { name }) => {
    const result = await axios.get(
      `https://ie-iteration1.herokuapp.com/api/${name}`
    );

    axios.get(
        `https://ie-iteration2.herokuapp.com/api2/${name}`
    ).then((result) => {
        setControlData(result.data)
    })
    setData(result.data);
  };

  return ( 
    <Layout>
      <div className={styles.container}>
        <div className={styles.animalText}>
          <h1>Learn About Pest Animals</h1>
        </div>
      </div>

      <Menu vertical className={styles.menu}>
        <Menu.Item name="fox" onClick={handleClick} />
        <Menu.Item name="pig" onClick={handleClick} />
        <Menu.Item name="goat" onClick={handleClick} />
        <Menu.Item name="rabbit" onClick={handleClick} />
        <Menu.Item name="dog" onClick={handleClick} />
      </Menu>

      <div className={styles.controlContainer}> 
        <BioInfoSection data={data}></BioInfoSection>

        <AnimalGridSection data={data}></AnimalGridSection>

        <h1 className={homeStyles.heading2}>{data.commonName}'s Impact</h1>
        <AnimalImpactSection data={data}></AnimalImpactSection>


        <h1 className={homeStyles.heading2}>{data.commonName}'s Control Method</h1>
        <AnimalControlSection
        data={controlData}
        ></AnimalControlSection>
      </div>
    </Layout>
  );
}
