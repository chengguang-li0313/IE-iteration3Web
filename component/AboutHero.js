import styles from '../styles/AboutHero.module.scss'
import { Nav } from '../component/Nav'

export const AboutHero = () => {
    return ( 
        
        <div className={styles.regulationHero}>
            <Nav></Nav> 
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
               About Us
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
                Learn How To Control Pest Animals On Your Farm                       
            </div>
            </p>   
        </div>
    )
}