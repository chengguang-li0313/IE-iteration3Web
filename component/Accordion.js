import { useState } from 'react';
import styles from '../styles/Animals.module.css'

export const Accordion = (props) => {
    const { title } = props
    const [isActive, setIsActive] = useState(false);

    return (
      <div className={styles["accordion-item"]}>
        <div className={styles["accordion-title"]} onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={styles["accordion-content"]}>{props.children}</div>}
      </div>
    );
}