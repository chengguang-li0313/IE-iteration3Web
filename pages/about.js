import Head from 'next/head'
import styles from '../styles/About.module.css'
import { Nav } from '../component/Nav'

export default function Home() {

  return (
    <>
        <Nav></Nav>

        <div className={styles.aboutContainer}>
            <img src='/logo.png'></img>
            <h1>Our Vision</h1>
            <p>We are a group of feral (non) enthusiasts and this is a joint initiative taken by us to help the lands of Farmers in Victoria being invaded by these species by providing information to identify and eradicate feral animals</p>
            
            <div className={styles.missionSection}>
                <div className={styles.aboutCard}>
                    <img src='/mission.png'></img>
                    <h1>Mission</h1>
                    <p>Raising awareness on the Impact of Invasive Animals on Agriculture by providing information on the declared established pest animals in Victoria</p>
                </div>
                <div className={styles.aboutCard}>
                    <img src='/vision.jpeg'></img>
                    <h1>Vision</h1>
                    <p>We help identify, prevent, control and eradicate pest animals from farmlands in Victoria in order to increase Agriculture Productivity</p>
                </div>
                <div className={styles.aboutCard}>
                    <img src='/values.png'></img>
                    <h1>Values</h1>
                    <p>Increase Farmer's Productivity, Promote Urban Wilderness, Keep Livestock and Native animals safe</p>
                </div>
            </div>
        </div>
    </>
  )
}
