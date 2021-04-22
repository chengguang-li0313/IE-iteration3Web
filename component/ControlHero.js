import styles from '../styles/Control.module.css'

export const ControlHero = () => {
    return (
        <div className={styles.controlHero}>
            <img src="/controlHero.jpeg"></img>
            <div className={styles.controlHeroInfo}>
                <h1>How To Control Pests Animals?</h1>
            </div>
        </div>
    )
}