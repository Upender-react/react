import './Header.css';
import React from 'react';
function Header(){
    return <>
    <div className="header">
        <ul className="header-menu">
            <li><a to="#">Home</a></li>
        </ul> 
        <div className="logo">
            <img className="logo-img" src="./faq_logo.png"/>
        </div>
    </div>
    </>
}
export default Header;