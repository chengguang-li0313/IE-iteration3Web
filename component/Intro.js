import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { BiDownArrowCircle } from 'react-icons/bi'
import Link from 'next/link'

export const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.introText}>
                <h1>Pest Animals have significant impact on Agriculture in Victoria</h1>
                <h4>We help secure your farm from Pest Animals</h4>

                
                <a href='#desc'><BiDownArrowCircle size={40} color={'lightgreen'}/></a> 
            </div>
        </div>
    )
}
