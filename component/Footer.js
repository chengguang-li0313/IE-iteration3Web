import style from '../styles/Footer.module.css';
import React from "react";
import Link from 'next/link'
export const Footer = () => {
    return (
        <div className={style.sitefooter}>         
         <div className={style.container}>
                    <h6>Feral Footprints</h6>
                <ul className={style.footerlinks}>
                       <Link href='/'>Home</Link>
                     <li><a href="/animals">Animals</a></li>
                    <li><a href="/control">Control Methods</a></li>
                     <li><a href="/regulation">Regulations</a></li>
                     <li><a href="/map">Map </a></li>
                      <li><a href="/about">About Us</a></li>
                 </ul>              

             {/* <hr> */}
            </div>
            
            <div className={style.container}>
                {/* <div className={style.contact}> 
                <p>Contact Email：Cristianoronando777@gm </p>
                </div>    */}
               <hr/>
             <p className={style.copyrighttext}>Copyright &copy; 2021 All Rights Reserved by 5ral Footprints Team.               
                    </p>
                </div>
        </div>

    )
}