import ControlStyles from "../styles/Control.module.css";
import styles from '../styles/ControlHero.module.scss'


export const ConventionalHero = (props) => {

    return (
        <div className={ControlStyles.conventionalHero}>
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
               Conventional Control Methods
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
                Learn about conventional control methods                     
            </div>
            </p>   
        </div>
    );
};