import styles from "../styles/Animals.module.css";

export const AnimalGridSection = (props) => {
  const { data } = props;

  return (
    <div className={styles.infoGrid}>
      <div className={styles.grid1}>
        <h2>Appearance</h2>
        <p>{data.appearance}</p>
      </div>
      <div className={styles.grid2}>
        <img src={data.image1}></img>
      </div>
      <div className={styles.grid3}>
        <h2>Diet</h2>
        <p>{data.diet}</p>
      </div>
      <div className={styles.grid4}>
        <img src={data.image2}></img>
      </div>

      <div className={styles.grid5}>
        <h2>Behavior</h2>
        <p>{data.behaviour}</p>
      </div>

      <div className={styles.grid6}>
        <img src={data.image3}></img>
      </div>

      <div className={styles.grid7}>
        <h2>Preffered Habitat</h2>
        <p>{data.habits}</p>
      </div>

      <div className={styles.grid8}>
        <img src={data.image4}></img>
      </div>

      <div className={styles.grid9}>
        <h2>Predation</h2>
        <p>{data.prey}</p>
      </div>
    </div>
  );
};
