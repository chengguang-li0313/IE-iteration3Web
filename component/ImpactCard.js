import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import textStyle from "../styles/normalText.module.scss"

export const ImpactCard = (props) => {
  const { title, desc, img } = props;

  return (
        <div className={styles.impactCard}>
            <h2><div className={textStyle.infoBlack}> {title} </div></h2>
            <p><div className={textStyle.infoBlack}>{desc} </div></p>
            <img src={img}></img>
        </div>
  );
};
