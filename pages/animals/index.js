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
import { useLoading, Circles } from '@agney/react-loading';

export default function Animals() {
  const [data, setData] = useState("");
  const [controlData, setControlData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [active, setActive] = useState('fox')

  useEffect(async () => {
    const result = await axios.get(
      "https://ie-iteration1.herokuapp.com/api/fox"
    );

    const controlResult = await axios.get(
      `https://ie-iteration2.herokuapp.com/api2/fox`
    )

    setData(result.data);
    setControlData(controlResult.data)
    setIsLoading(false)
    console.log(controlResult.data);
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
    setActive(name)
    setData(result.data);
    setIsLoading(false);
  };

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Circles width="100" />,
  });

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.animalText}>
          <h1>Learn About Pest Animals</h1>
        </div>
      </div>

      <Menu vertical className={styles.menu}>
        <Menu.Item name="fox" active={active === 'fox'} onClick={handleClick} />
        <Menu.Item name="pig" active={active === 'pig'} onClick={handleClick} />
        <Menu.Item name="goat" active={active === 'goat'} onClick={handleClick} />
        <Menu.Item name="rabbit" active={active === 'rabbit'} onClick={handleClick} />
        <Menu.Item name="dog" active={active === 'dog'} onClick={handleClick} />
      </Menu>

      <div className={styles.controlContainer}>
        {
          isLoading ? (
          <section {...containerProps}>
            {indicatorEl} {/* renders only while loading */}
          </section>) : (
            <>
          <BioInfoSection data={data}></BioInfoSection>

          <AnimalGridSection data={data}></AnimalGridSection>

          <AnimalImpactSection data={data}></AnimalImpactSection>

          <AnimalControlSection data={controlData}></AnimalControlSection>
          </>)
        }
      </div>
    </Layout>
  );
}
