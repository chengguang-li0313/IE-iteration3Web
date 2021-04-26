import styles from '../styles/Home.module.css'
import Link from 'next/link'
import textStyle from '../styles/FooterText.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href='/'>
                 <div className={textStyle.text}>
                    Home
                </div>  
            </Link>
            <Link href='/animals'>
                <div className={textStyle.text}>
                    Animals
                </div>  
                </Link>
            <Link href='/control'>
                <div className={textStyle.text}>
                    Control Methods
                </div> 
                </Link>
            <Link href="/regulation">
                  <div className={textStyle.text}>
                    Regulations
                </div>
            </Link>
            <Link href='/about'>
                  <div className={textStyle.text}>
                      About Us
                </div>
            </Link>
        </div>

    )
}