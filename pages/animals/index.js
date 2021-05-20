import { Layout } from "../../component/Layout";
import styles from "../../styles/Animals.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { AnimalImpactSection } from "../../component/AnimalImpactSection";
import { AnimalGridSection } from "../../component/AnimalGridSection";
import { Menu } from "semantic-ui-react";
import { BioInfoSection } from "../../component/BioInfoSection";
import { AnimalControlSection } from '../../component/AnimalControlSection'
import { useLoading, Bars } from '@agney/react-loading';
import {BarChart} from '../../component/BarChart';
import { AnimalHero } from '../../component/AnimalHero'
import { Footer } from '../../component/Footer' 
import ScrollToTop from "react-scroll-up";


export default function Animals() {
  const [data, setData] = useState("");
  const [controlData, setControlData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [active, setActive] = useState('fox')
  //population 
  const [charData, setCharData] = useState("");
  useEffect(async () => {
    const result = await axios.get(
      "https://ie-iteration1.herokuapp.com/api/fox"
    );

    const controlResult = await axios.get(
      `https://ie-iteration2.herokuapp.com/api2/fox`
    );
    const charResult = await axios.get(
      `https://ie-animalpopulation.herokuapp.com/api/fox`
    )
     
 
    setData(result.data);
    setControlData(controlResult.data)
    setCharData(charResult.data)

    setIsLoading(false)
    //console.log(charResult.data);
  }, []);

  const handleClick = async (e, { name }) => {
    const result = await axios.get(
      `https://ie-iteration1.herokuapp.com/api/${name}`
    );

    axios.get(
        `https://ie-iteration2.herokuapp.com/api2/${name}`
    ).then((result) => {
        setControlData(result.data)
    });

    const charResult = await axios.get(
      `https://ie-animalpopulation.herokuapp.com/api/${name}`
    )

    setActive(name)
    setData(result.data);
    setCharData(charResult.data);
    setIsLoading(false);
  };

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="100" />,
  });

  return (
    <>
    {/* // <Layout> */}
      {/* <div className={styles.container}>
        <div className={styles.animalText}>
          <h1>Learn About Pest Animals</h1>
        </div>
      </div> */}
      <AnimalHero> </AnimalHero>
        {
          isLoading ? (
            <div className={styles.loading}>
               {indicatorEl} {/* renders only while loading */}
          </div>) : (
             <>
           {/* //menu af */}
           <div className={styles.containerAll}>  
           <div className={styles.containerMenu}>
      <Menu vertical className={styles.menu}>
        <Menu.Item name="fox" active={active === 'fox'} onClick={handleClick} />
        <Menu.Item name="pig" active={active === 'pig'} onClick={handleClick} />
        <Menu.Item name="goat" active={active === 'goat'} onClick={handleClick} />
        <Menu.Item name="rabbit" active={active === 'rabbit'} onClick={handleClick} />
        <Menu.Item name="dog" active={active === 'dog'} onClick={handleClick} />
      </Menu>         
         </div>

            <div className={styles.controlContainer}>
          {/* <BioInfoSection data={data}> 
         
          </BioInfoSection>       */}        
   {/* modify code  */}

           <div className={styles.bioInfo}>
                <div className={styles.biologyCard}>
                  <img src={data.imageTitle}></img>
               </div>
             <div className={styles.infoCard}>
             <h2>{data.commonName}</h2>
               <p>{data.scientificName}</p>
               <h2>Origin</h2>
                <p>{data.originPlace}</p>
              <h2>Distribution</h2>
              <p>{data.distribution}</p>
             </div> 
           <div className={styles.barCard}> 
                <BarChart data={charData}> </BarChart>
          </div> 
         </div>
   {/* modify code  */}

          <AnimalGridSection data={data}></AnimalGridSection>

          <AnimalImpactSection data={data}></AnimalImpactSection>

          <AnimalControlSection data={controlData}></AnimalControlSection>
          </div>
          </div>
          </>
          )
        }
            <ScrollToTop 
    showUnder={160}
    easing="linear"
    duration={3000}
    cursor="pointer"
     >    
    <img src="/upup.svg" width="30px" height="30px"/> 
  </ScrollToTop> 
      
      {/* </div> */}
    {/* </Layout> */}
    <Footer></Footer>
       </>
  );
}
