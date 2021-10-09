import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Sidenav.css';
import { volunteerItems1, volunteerItems2, adminItems1, adminItems2 } from './SidenavItems';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';


const userTypes = [ "admin", "volunteer" ];

function getScreenSize () {
    if(window.innerWidth < 768) {
        return true;
    } else {
        return false;
    }
}

export default function Sidenav() {
    const userType = userTypes[1];

    // cited from: https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
    const [isMobile, setIsMobile] = useState(getScreenSize);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const manageResize = () => {
        setIsMobile(getScreenSize);
    }

    let menus1;    
    let menus2;

    useEffect(() => {
        window.addEventListener("resize", manageResize);
        return () => {
            window.removeEventListener("resize", manageResize)
        }
    }, [isMobile]);

    function HeaderRender () {
        return(
            <div className={`header fixed-top bg-transparent topnav ${hamburgerOpen ? 'open' : ''} ${isMobile ? '': 'collapse'}`}>
                <ul className="navbar-nav flex-row bg-transparent">
                    <li className="nav-item p-0 ">
                        <div className="nav-link py-0" aria-current="page">
                            <Hamburger
                                toggled={hamburgerOpen} 
                                toggle={setHamburgerOpen}
                                duration={0.6}
                                size={26}
                                rounded
                                color="black"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

    const renderMenus = () => {
        if(userType === userTypes[0]) {
            menus1 = adminItems1.map((item, index) => {
                return(
                    <li className="nav-item border-0" key={index}>
                        <Link to={item.to} className="nav-link btn-lg text-center py-1 btn-font-color-secondary" aria-current="page" type="button">
                            {item.icon}
                        </Link>
                    </li>
                );
            });
            menus2 = adminItems2.map((item, index) => {
                return(
                    <li className="nav-item border-0" key={index}>
                        <Link to={item.to} className="nav-link btn-lg text-center px-3 py-1 btn-font-color-secondary" aria-current="page" type="button">
                            {item.icon}
                        </Link>
                    </li>
                );
            });
        } else {
            menus1 = volunteerItems1.map((item, index) => {
                return(
                    <li className="nav-item border-0" key={index}>
                        <Link to={item.to} className="nav-link btn-lg text-center py-1 btn-font-color-secondary" aria-current="page" type="button">
                            {item.icon}
                        </Link>
                    </li>
                );
            });
            menus2 = volunteerItems2.map((item, index) => {
                return(
                    <li className="nav-item border-0" key={index}>
                        <Link to={item.to} className="nav-link btn-lg text-center px-3 py-1 btn-font-color-secondary" aria-current="page" type="button">
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
            <HeaderRender/>
            <div className={`${hamburgerOpen ? 'open' : ''} navbar l-navbar shadow`}> 
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
