import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { BiDownArrowCircle } from 'react-icons/bi'

export const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.introText}>
                <h1>Pest Animals have significant impact on Agriculture in Victoria</h1>
                <p>We help secure your farm from Pest Animals</p>
                <a href='#desc'><BiDownArrowCircle size={40} color={'lightgreen'}/></a>
            </div>
        </div>
    )
}
