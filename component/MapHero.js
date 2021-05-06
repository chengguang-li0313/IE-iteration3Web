import styles from '../styles/Map.module.scss'

export const MapHero = () => {
    return ( 
        <div className={styles.regulationHero} >
            <p>
            {/* <div className={styles.regulationHeroInfo}> */}
             <div className={styles.regulationHeroInfo1}> 
               Feral Animals' Distribution Map 
              </div>                        
            {/* s */}
            <div className={styles.regulationHeroInfo}>
             Check the feral animals around you                     
            </div>
            </p>   
        </div>
    )
}