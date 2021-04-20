import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { BiDownArrowCircle } from 'react-icons/bi'

export const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.introText}>
                <h1>Australia Feral Animals Pose Significant Problems to Agriculture</h1>
                <a href='#desc'><BiDownArrowCircle size={40} color={'lightgreen'}/></a>
            </div>
        </div>
    )
}
