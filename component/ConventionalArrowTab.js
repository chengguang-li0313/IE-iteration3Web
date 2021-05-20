import styles from '../styles/ArrowTab.module.css';
import { useState } from 'react';

export const ConventionalArrowTab = (props) => {
    const [active, setActive] = useState('introduction');

    const handleClick = (e) => {
        setActive(e.target.getAttribute('name'))
    }

    return (
        <>
        <div className={styles.arrowTabs}>
          <div
            name="introduction"
            className={`${styles.arrowTab} ${
              active === "introduction" ? styles.active : styles.empty
            }`}
            onClick={handleClick}
          >
            Introduction
          </div>
          <div
            name="benefits"
            className={`${styles.arrowTab} ${
              active === "benefits" ? styles.active : styles.empty
            }`}
            onClick={handleClick}
          >
            Key Benefits
          </div>
          <div
            name="methods"
            className={`${styles.arrowTab} ${
              active === "methods" ? styles.active : styles.empty
            }`}
            onClick={handleClick}
          >
            Common Conventional Methods
          </div>
        </div>
          <div className={`${
              active === "introduction" ? styles.activePane : styles.tabPane
            }`}>
            {props.tab1}
          </div>
          <div className={`${
              active === "benefits" ? styles.activePane : styles.tabPane
            }`}>
            {props.tab2}          
            </div>
          <div className={`${
              active === "methods" ? styles.activePane : styles.tabPane
            }`}>
            {props.tab3}          
            </div>
        </>
    );
}