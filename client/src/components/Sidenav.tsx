import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Sidenav.css';

export default function Sidenav() {
    return (
        <>        
            <div className="navbar l-navbar"> 
                <div className="container nav-container">                    
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="logo" />
                    </a>
                    <div>
                        
                    </div>
                </div>               
            </div>  
        </>
    )
}
