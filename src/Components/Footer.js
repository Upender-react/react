import './Footer.css';
import React from 'react';
function Footer(){
    return <>
    <div className="header">
        <ul className="header-menu">
            <li><a href="#">Home</a></li>
        </ul> 
        <ul className="footer-menu">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Breed</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Result</a></li>
        </ul>
    </div>
    </>
}
export default Footer;