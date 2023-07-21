 import React from "react";
 import logo from './images/logo.svg';
 
 
 const Header = () => {
    return (
        <nav className="Navbar">
            <div className="telo">
                <img src={logo} alt="logo" />
                <h1 className="header">Telo </h1>
            </div>
            <ul className="menulist">
                <li>Home</li>
                <li>Service</li>
                <li>New Post</li>
                <li>About</li>
            </ul>
        </nav>
         
       
    
    )
 } 

 export default Header;