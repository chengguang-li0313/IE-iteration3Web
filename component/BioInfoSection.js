import styles from "../styles/Animals.module.css";

export const BioInfoSection = (props) => {
  const { data } = props;

  return (
      <div className={styles.bioInfo}>
        <div className={styles.biologyCard}>
          <img src={data.appearanceImage}></img>
        </div>
        <div className={styles.infoCard}>
          <h1>{data.commonName}</h1>
          <p>{data.scientificName}</p>
          <h2>Origin</h2>
          <p>{data.originPlace}</p>
          <h2>Distribution</h2>
          {data.distribution}
        </div>
      </div>
  );
};
