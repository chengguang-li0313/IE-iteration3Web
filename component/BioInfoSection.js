import styles from "../styles/Animals.module.css";

export const BioInfoSection = (props) => {
  const { data } = props;

  return (
    <div className={styles.bioInfo}>
      <div className={styles.biologyCard}>
        <h1>{data.commonName}</h1>
        <p>{data.scientificName}</p>
        <img src={data.appearanceImage}></img>
      </div>
      <div className={styles.infoCard}>
        <p>Origin</p>
        {data.originPlace}
        <p>Distribution</p>
        {data.distribution}
      </div>
    </div>
  );
};
