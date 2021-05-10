import styles from '../styles/AnimalHero.module.scss'
import { Nav } from '../component/Nav'

export const AnimalHero = () => {
    return ( 
        <div className={styles.regulationHero}>
             <Nav></Nav>
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
                Established Pest Animals In VIC
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
                Certain Animals are declared as Pest Animals                         
            </div>
            </p>   
        </div>
    )
}