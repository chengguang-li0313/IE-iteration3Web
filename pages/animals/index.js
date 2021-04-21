import { Nav } from "../../component/Nav";
import styles from "../../styles/Animals.module.css";
import homeStyles from "../../styles/Home.module.css";
import { AnimalCard } from "../../component/AnimalCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Animals() {
const [data, setData] = useState("");

useEffect(async () => {
    const result = await axios.get('https://ie-iteration1.herokuapp.com/api/fox');
    setData(result.data);
  }, []);


const handleClick = async (e) => {
    const result = await axios.get(`https://ie-iteration1.herokuapp.com/api/${e.currentTarget.getAttribute('name')}`);
    setData(result.data);
};

return (
  <>
    <Nav></Nav>
    <div className={styles.container}>
      <div className={styles.animalText}>
        <h1>How Are Feral Animals Harming Farmland?</h1>
      </div>
    </div>

    <div className={styles.animalSection}>
      <div name="fox" onClick={handleClick}>
        <AnimalCard
          title={"Fox"}
          img={"/fox.png"}
          sciName={"Vulpes Vulpes"}
        ></AnimalCard>
      </div>

      <div name="pig" onClick={handleClick}>
        <AnimalCard
          title={"Pig"}
          img={"/pig.png"}
          sciName={"Sus Scrofa"}
        ></AnimalCard>
      </div>

      <div name="goat" onClick={handleClick}>
        <AnimalCard
          title={"Goat"}
          img={"/goat.png"}
          sciName={"Capra Hircus"}
        ></AnimalCard>
      </div>

      <div name="rabbit" onClick={handleClick}>
        <AnimalCard
          title={"Rabbit"}
          img={"/rabbit.png"}
          sciName={"Oryctolagus Cuniculus"}
        ></AnimalCard>
      </div>

      <div name="dog" onClick={handleClick}>
        <AnimalCard
          title={"Dog"}
          img={"/dog.jpeg"}
          sciName={"Canis lupus"}
        ></AnimalCard>
      </div>
    </div>

  

    <div className={styles.bioInfo}>
        <div className={styles.biology}>
            <h1>{data.commonName}</h1>
            <p>{data.scientificName}</p>
        </div>
          <img src={data.appearanceImage}></img>
        <div className={styles.infoCard}>
            <p>Origin</p>{data.originPlace}
            <p>Distribution</p>{data.distribution}
        </div>
    </div>

    <div className={styles.infoGrid}>
      <div className={styles.grid1}>
        <h2>Appearance</h2>
        <p>{data.appearance}</p>
      </div>
      <div className={styles.grid3}>
        <h2>Diet</h2>
        <p>{data.diet}</p>
      </div>

      <div className={styles.grid5}>
        <h2>Behavior</h2>
        <p>{data.behaviour}</p>
      </div>

      <div className={styles.grid7}>
        <h2>Preffered Habitat</h2>
        <p>{data.habits}</p>
      </div>

      <div className={styles.grid9}>
        <h2>Predation</h2>
        <p>{data.prey}</p>
      </div>
    </div>

    <>
      <h1 className={homeStyles.heading2}>
        {data.commonName}'s Impact
      </h1>
      <div className={homeStyles.desc}>
        <img src={data.ecosystemIcon} className={homeStyles.descImg1}></img>
        <p className={homeStyles.descText1}>{data.ecosystemImpact}</p>

        <img src={data.economicIcon} className={homeStyles.descImg2}></img>
        <p className={homeStyles.descText2}>{data.economicImpact}</p>

        <img src={data.socialIcon} className={homeStyles.descImg3}></img>
        <p className={homeStyles.descText3}>{data.healthImpact}</p>

        <img src={data.agricultureIcon} className={homeStyles.descImg4}></img>
        <p className={homeStyles.descText4}>{data.agricultureImpact}</p>
      </div>
    </>
  </>
);
}
