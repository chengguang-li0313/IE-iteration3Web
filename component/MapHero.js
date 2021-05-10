import styles from '../styles/Map.module.scss'
import { Nav } from '../component/Nav'
export const MapHero = () => {
    return (

        <div className={styles.regulationHero} >
        <Nav></Nav>
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
                  Distribution of Pest Animals In VIC
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
              Spot the feral animals around you                     
            </div>
            </p>   
        </div>

    )
}