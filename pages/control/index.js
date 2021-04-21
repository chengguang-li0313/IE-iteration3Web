import styles from '../../styles/Control.module.css'
import { Nav } from "../../component/Nav";
import { ControlCard } from '../../component/ControlCard'

export default function Control() {

  return (
    <>
        <Nav></Nav>
        <div className={styles.controlSection}>
            <h1>Control Methods by Animals</h1>
            <div className={styles.controlCards}>
                <ControlCard 
                    title={"Fox"}
                    img={'/fox.png'}
                    href={'/control/fox'}
                ></ControlCard>
                <ControlCard 
                    title={"Goat"}
                    img={'/goat.png'}
                    href={'/control/goat'}
                ></ControlCard>
                <ControlCard 
                    title={"Dog"}
                    img={'/dog.jpeg'}
                    href={'/control/dog'}
                ></ControlCard>
                <ControlCard 
                    title={"Pig"}
                    img={'/pig.png'}
                    href={'/control/pig'}
                ></ControlCard>
                <ControlCard 
                    title={"Rabbit"}
                    img={'/rabbit.png'}
                    href={'/control/rabbit'}
                ></ControlCard>
            </div>
        </div>
    </>
  )
}
