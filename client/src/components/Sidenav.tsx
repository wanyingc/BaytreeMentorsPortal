import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Sidenav.css';
import { volunteerItems1, volunteerItems2, adminItems1, adminItems2 } from './SidenavItems';
import { Link } from 'react-router-dom';


const userTypes = [ "admin", "volunteer" ];

export default function Sidenav() {
    // cited from: https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
    const [isMobile, setIsMobile] = useState(false);
    const userType = userTypes[1];

    const manageResize = () => {
        if(window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", manageResize)
        return () => {
            window.removeEventListener("resize", manageResize)
        }
    }, [isMobile]);

    let menus1;    
    let menus2;    
    
    const renderMenus = () => {
        if(userType === userTypes[0]) {
            menus1 = adminItems1.map((item, index) => {
                return(
                    <li className="nav-item btn fs-5 border-3" key={index}>
                        <Link to={item.to} className="nav-link py-0 btn-font-color-secondary" aria-current="page">
                            {item.icon}
                        </Link>
                    </li>
                );
            });
            menus2 = adminItems2.map((item, index) => {
                return(
                    <li className="nav-item btn fs-5 border-3" key={index}>
                        <Link to={item.to} className="nav-link py-0 btn-font-color-secondary" aria-current="page">
                            {item.icon}
                        </Link>
                    </li>
                );
            });
        } else {
            menus1 = volunteerItems1.map((item, index) => {
                return(
                    <li className="nav-item btn fs-5 border-3" key={index}>
                        <Link to={item.to} className="nav-link py-0 btn-font-color-secondary" aria-current="page">
                            {item.icon}
                        </Link>
                    </li>
                );
            });
            menus2 = volunteerItems2.map((item, index) => {
                return(
                    <li className="nav-item btn fs-5 border-3" key={index}>
                        <Link to={item.to} className="nav-link py-0 btn-font-color-secondary" aria-current="page">
                            {item.icon}
                        </Link>
                    </li>
                );
            });
        }
    }

    renderMenus();

    return (
        <>        
            <div className="navbar l-navbar"> 
                <div className="container nav-container">   
                    <div className="mt-2 nav-top-container">                
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className="mt-3">
                            <ul className='navbar-nav flex-column'>
                                {menus1}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-3">
                        <ul className='navbar-nav flex-column'>
                            {menus2}
                        </ul>
                    </div>                 
                </div>               
            </div>  
        </>
    )
}
