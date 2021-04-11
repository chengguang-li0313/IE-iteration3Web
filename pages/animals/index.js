import { Nav } from '../../component/Nav'
import styles from '../../styles/Animals.module.css'
import { AnimalSection } from '../../component/AnimalSection'

export default function Animals() {
    return (
        <>
            <Nav></Nav>
            <div className={styles.container}>
                <div className={styles.animalText}>
                    <h1>How Are Feral Animals Harming Farmland?</h1>
                    <a href='#animals'>Learn More</a>
                </div>
            </div>
            
            <AnimalSection></AnimalSection>
        </>
    )
}