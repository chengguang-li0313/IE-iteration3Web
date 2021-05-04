import styles from "../styles/Animals.module.css";
import ReactCardFlipper from "react-card-flipper";

export const CardWithButton = (props) => {
  const { img, title, text, href, pros, cons } = props;

  return (
    <ReactCardFlipper width="300px" height="550px" behavior="hover">
    <div className={styles.animalImpactCard}>
      <div>
        <img className={styles.controlHeader} src={img}></img>
        <div className={styles.animalImpactTitle}>{title}</div>
        <p>{text}</p>
      </div>
      
    </div>

    <div className={styles.animalImpactCard}>
      <div>
        <div className={styles.animalImpactTitle}>Advantages</div>
        {/* {pros.split(/\d/).map((i,key) => {
                    return key === 0 ?  <div></div> :
                     <p key={key}>{i}</p>;
                })} */}
        <p>{pros}</p>
        <div className={styles.animalImpactTitle}>Disadvantages</div>
        <p>{cons}</p>
      </div>
      
      <a href={href} target="_blank"><button>Learn More</button></a>
    </div>
    </ReactCardFlipper>
  );

};
