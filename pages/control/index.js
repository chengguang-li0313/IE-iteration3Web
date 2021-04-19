import styles from '../../styles/Control.module.css'
import { Nav } from "../../component/Nav";
import { ControlCard } from '../../component/ControlCard'

export default function Control() {

  return (
    <>
        <Nav></Nav>
        <div className={styles.controlSection}>
            <h1>Conventional Control Techniques</h1>
            <div className={styles.controlCards}>
                <ControlCard 
                    title={"Hunting"}
                    img={'/hunting.jpeg'}
                    href={'/control/hunting'}
                ></ControlCard>
                <ControlCard 
                    title={"Fencing"}
                    img={'/fencing.jpeg'}
                    href={'/control/fencing'}
                ></ControlCard>
                <ControlCard 
                    title={"Trapping"}
                    img={'/trapping.jpeg'}
                    href={'/control/trapping'}
                ></ControlCard>
                <ControlCard 
                    title={"Baiting"}
                    img={'/baiting.jpeg'}
                    href={'/control/baiting'}
                ></ControlCard>
            </div>
        </div>

        <div className={styles.bioControlSection}>
            <h1>Biological Control</h1>
            <div className={styles.controlCards}>
                <ControlCard 
                    title={"Natural Predators"}
                    img={'/predator.jpeg'}
                    href={'/control/predator'}
                ></ControlCard>
                <ControlCard 
                    title={"Parasites"}
                    img={'/parasites.jpeg'}
                    href={'/control/parasite'}
                ></ControlCard>
                <ControlCard 
                    title={"Disease-carrying Bacteria/Viruses"}
                    img={'/bacteria.jpeg'}
                    href={'/control/bacteria'}
                ></ControlCard>
            </div>
        </div>
    </>
  )
}
