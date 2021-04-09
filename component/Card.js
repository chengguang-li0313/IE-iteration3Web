import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../styles/Home.module.css";

export const Card = (props) => {
    const  {desc, title, img} = props
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <div className={styles.cardFront}>
            <img src={img}></img>
            <p>{title}</p>
            <button onClick={handleClick}>Learn More</button>
        </div>

        <div className={styles.cardBack}>
            <p>
            {desc}
            </p>
            <button onClick={handleClick}>Back</button>
        </div>
        </ReactCardFlip>
    );
    };
