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

                  {/* <Col sm="6" sm="6">
                      <h6>About</h6>
                         <p className="text-justify">Our team name is <i>5eral footprints </i> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                     </Col> */}

                     
                    <h6>Quick Links</h6>
                <ul className={style.footerlinks}>
                      <li><a href="http://scanfcode.com/about/">About Us</a></li>
                     <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                     <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                      <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                 </ul>
               

             {/* <hr> */}
            </div>
          {/* <div className={style.container}>
             <div className={style.row}>
            <div className='col-md-8 col-sm-6 col-xs-12'>
             <p className={style.copyrighttext}>Copyright &copy; 2017 All Rights Reserved by 
                 <a href="#">Scanfcode</a>.
                    </p>
                </div>

           </div>
      </div> */}
        </div>

    )
}