import styles from "../styles/Animals.module.css";

export const AnimalImpactCard = (props) => {
    const  {img, title, text} = props

    return (
        <div className={styles.animalImpactCard}>
          <img src={img}></img>
          <div className={styles.animalImpactTitle}>{title}</div>
          <p>{text}</p>
        </div>
    );
    };