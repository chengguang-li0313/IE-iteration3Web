import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href='/'>Home</Link>
            <Link href='/animals'>Animals</Link>
            <Link href='/control'>Control Methods</Link>
            <Link href="/regulation">Regulation</Link>
            <Link href='/about'>About Us</Link>
        </div>
    )
}