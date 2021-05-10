import styles from '../styles/AnimalHero.module.scss'
import { Nav } from '../component/Nav'

export const AnimalHero = () => {
    return ( 
        <div className={styles.regulationHero}>
            <Nav></Nav>
        </div>
    )
}