import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export const ImpactCard = (props) => {
  const { title, desc, img } = props;

  return (
        <div className={styles.impactCard}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <img src={img}></img>
        </div>
  );
};
