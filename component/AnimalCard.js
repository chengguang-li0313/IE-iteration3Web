import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../styles/Animals.module.css";
import axios from 'axios';

export const AnimalCard = (props) => {
    const  {title, img, url, href} = props
    const [flipped, setFlipped] = useState(false);
    const [data, setData] = useState("")

    useEffect(async () => {
        const result = await axios.get(url);
        console.log(result.data)
        setData(result.data);
      }, []);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <div className={styles.card} onClick={handleClick}>
            <img src={img}></img>
            <h2>{title}</h2>
        </div>

        <div className={styles.card} onClick={handleClick}>
            <p>Common Name: {data.commonName}</p>
            <p>Science Name: {data.scientificName}</p>
            <p>Other Common Name: {}</p>
            <p>Origin: {data.originPlace}</p>
            <p>Distribution: {data.distribution}</p>
            <a href={href}>Learn More</a>
        </div>
        </ReactCardFlip>
    );
    };