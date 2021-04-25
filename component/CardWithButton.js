import styles from "../styles/Animals.module.css";

export const CardWithButton = (props) => {
  const { img, title, text, href } = props;

  return (
    <div className={styles.animalImpactCard}>
      <div>
        <img className={styles.controlHeader} src={img}></img>
        <div className={styles.animalImpactTitle}>{title}</div>
        <p>{text}</p>
      </div>
      
      <a href={href}><button>Learn More</button></a>
    </div>
  );
};
