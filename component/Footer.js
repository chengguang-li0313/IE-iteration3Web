import styles from '../styles/Home.module.css'
import Link from 'next/link'
import textStyle from '../styles/FooterText.module.css';
import style from '../styles/Footer.module.css';
import { Container, Row, Col } from "reactstrap";
import React from "react";
export const Footer = () => {
    return (
        <div className={style.sitefooter}>         
         <div className={style.container}>
                    <h6>Quick Links</h6>
                <ul className={style.footerlinks}>
                      <li><a href="/">Home</a></li>
                     <li><a href="/animals">Animals</a></li>
                    <li><a href="/control">Control Methods</a></li>
                     <li><a href="/regulation">Regulations</a></li>
                      <li><a href="/about">About Us</a></li>
                 </ul>              

             {/* <hr> */}
            </div>
            
            <div className={style.container}>
               <hr/>
             <p className={style.copyrighttext}>Copyright &copy; 2021 All Rights Reserved by 5eral Footprints Team.               
                    </p>
                </div>
        </div>

    )
}