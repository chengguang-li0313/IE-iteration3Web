import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import style from '../styles/Title.module.scss'

export const Nav = () => {
    const [collapse, setCollapse] = useState(true)

    return (
        <nav className={styles.nav}>
            {/* <img src='/logo.png'></img> */}
             <Link href='/'>
            <div className={style.regulationHeroInfo}> 
              Feral Footprints
            </div>
            </Link>
            <div className={styles.navItem}>
                <Link href='/'>Home</Link>
                <Link href='/animals'>Animals</Link>
                <Link href='/control'>Control Methods</Link>
                <Link href="/regulation">Regulations</Link>
                <Link href='/map'>Map </Link>
                <Link href='/about'>About Us</Link>
            </div>
        </nav>
    )
}

