import styles from '../../styles/Control.module.css'
import { Nav } from "../../component/Nav";

export default function Control() {

  return (
    <>
        <Nav></Nav>
        <div className={styles.controlSection}>
            <h1>Conventional Control Method</h1>
            <div className={styles.controlCards}>
                <div className={styles.controlCard}>
                    <img src='/conventional.jpeg'></img>
                    <div className={styles.controlCardContainer}>
                        <div className={styles.controlCardInfo}>
                            <h1>Conventional control methods</h1>
                            <p>Conventional control methods for feral animals include trapping, baiting, fencing and shooting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
