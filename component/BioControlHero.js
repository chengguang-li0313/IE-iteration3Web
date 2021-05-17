import ControlStyles from "../styles/Control.module.css";
import styles from '../styles/ControlHero.module.scss'


export const BioControlHero = (props) => {

    return (
        <div className={ControlStyles.bioControlHero}>
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
               Biological Control
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
                Learn about biological control methods                       
            </div>
            </p>   
        </div>
    );
};