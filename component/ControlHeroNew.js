import styles from '../styles/ControlHero.module.scss'
import { Nav } from '../component/Nav'

export const ControlHeroNew = () => {
    return ( 
        
        <div className={styles.regulationHero}>
            <Nav></Nav> 
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
               How To Control Pest Animals In VIC
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
                Learn how to control pest animals on your farm                       
            </div>
            </p>   
        </div>
    )
}