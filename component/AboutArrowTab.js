import styles from '../styles/ArrowTab.module.css';
import { useState } from 'react';

export const AboutArrowTab = () => {
    const [active, setActive] = useState('about');

    const handleClick = (e) => {
        setActive(e.target.getAttribute('name'))
    }

    return (
        <>
      <div className={styles.arrowTabContainer}>
        <h1>Our Vision</h1>
        </div>

        <div className={styles.arrowTabs}>
          <div
            name="about"
            className={`${styles.arrowTab} ${
              active === "about" ? styles.active : styles.empty
            }`}
            onClick={handleClick}
          >
            About Us
          </div>
          <div
            name="vision"
            className={`${styles.arrowTab} ${
              active === "vision" ? styles.active : styles.empty
            }`}
            onClick={handleClick}
          >
            Vision
          </div>
          <div
            name="mission"
            className={`${styles.arrowTab} ${
              active === "mission" ? styles.active : styles.empty
            }`}
            onClick={handleClick}
          >
            Mission
          </div>
          <div
            name="values"
            className={`${styles.arrowTab} ${
              active === "values" ? styles.active : styles.empty
            }`}
            onClick={handleClick}
          >
            Values
          </div>
        </div>
          <div className={`${
              active === "about" ? styles.activePane : styles.tabPane
            }`}>
            We are a group of feral (non) enthusiasts and this is a joint initiative taken by us to help the lands of Farmers in Victoria being invaded by these species by providing information to identify and eradicate feral animals
          </div>
          <div className={`${
              active === "vision" ? styles.activePane : styles.tabPane
            }`}>
            <img src='/vision.jpeg'></img>
            We help identify, prevent, control and eradicate pest animals from farmlands in Victoria in order to increase Agriculture Productivity 
          </div>
          <div className={`${
              active === "mission" ? styles.activePane : styles.tabPane
            }`}>
            <img src='/mission.png'></img>
            Raising awareness on the Impact of Invasive Animals on Agriculture by providing information on the declared established pest animals in Victori
          </div>
          <div className={`${
              active === "values" ? styles.activePane : styles.tabPane
            }`}>
            <img src='/values.png'></img>
            Increase Farmer's Productivity, Promote Urban Wilderness, Keep Livestock and Native animals safe
          </div>
        </>
    );
}