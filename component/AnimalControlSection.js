import styles from "../styles/Animals.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react'
import axios from "axios";
import { ControlCard } from '../component/ControlCard'

export const AnimalControlSection = (props) => {
    const { data } = props

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const controlMethods = data.map((controlMethod) => {
        <ControlCard title={controlMethod.eradication.name}></ControlCard>;
    });

    return (
        <>
        <div className={styles.controlSection}>
            <h1>Hello</h1>
        </div>
        {/* <Carousel 
            responsive={responsive} 
            showDots={true}
            > */}
            {controlMethods}
        {/* </Carousel> */}
        </>
    );
};
