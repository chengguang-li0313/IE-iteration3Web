import { useState, useEffect } from "react";
import styles from "../styles/Animals.module.css";

export const AnimalCard = (props) => {
    const  {title, img, sciName} = props

    return (
        <div className={styles.card}>
            <img src={img}></img>
            <h2>{title}</h2>
            <p>{sciName}</p>
        </div>
    );
    };