import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Sidenav.css';
import { volunteerItems1, adminItems1 } from './SidenavItems';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { isAdmin } from '../auth/Authenticator';
import { CgLogOut } from 'react-icons/cg';


function getScreenSize () {
    if(window.innerWidth < 1680) {
        return true;
    } else {
        return false;
    }
}

function reMoveData() {
    localStorage.clear();
}

export default function Sidenav() {

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
        if(isAdmin()) {
            menus1 = adminItems1.map((item, index) => {
                return(
                    item.to === "/resources" ?
                    (
                        <li className="nav-item border-0" key={index}>
                            <Link className="nav-link btn-lg text-left px-3 py-1 fs-6" aria-current="page" type="button" to={{ pathname: "https://thebaytreecentre.sharepoint.com/Shared%20Documents/Forms/AllItems.aspx?id=%2FShared%20Documents%2FYouth%20Service%2FMentoring%20Resources&p=true" }} target="_blank">
                                {item.icon}
                                {item.title}
                            </Link>
                        </li>
                    )
                    :
                    (
                    <li className="nav-item border-0" key={index}>
                        <Link to={item.to} className="nav-link btn-lg text-left px-3 py-1 fs-6" aria-current="page" type="button">
                            {item.icon}
                            {item.title}
                        </Link>
                    </li>
                    )                   
                );
            });
            menus2 = <></>;
        } else {
            menus1 = volunteerItems1.map((item, index) => {
                return(

                    item.to === "/resources" ? 
                    (
                        <li className="nav-item border-0" key={index}>
                            <Link className="nav-link btn-lg text-left px-3 py-1 fs-6" aria-current="page" type="button" to={{ pathname: "https://thebaytreecentre.sharepoint.com/Shared%20Documents/Forms/AllItems.aspx?id=%2FShared%20Documents%2FYouth%20Service%2FMentoring%20Resources&p=true" }} target="_blank">
                                {item.icon}
                                {item.title}
                            </Link>
                        </li>
                    )
                    :
                    (
                        <li className="nav-item border-0" key={index}>
                        <Link to={item.to} className="nav-link btn-lg text-left px-3 py-1 fs-6" aria-current="page" type="button">
                            {item.icon}
                            {item.title}
                        </Link>
                        </li>
                    )

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
                            <img src={logo} alt="logo"/>
                        </Link>
                        <div className="portal-name text-center">
                            {isAdmin() ? <>ADMIN PORTAL </> : <>MENTOR PORTAL</>}
                        </div>
                        <div className="mt-3">
                            <ul className='navbar-nav flex-column'>
                                {menus1}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-3">
                        <ul className='navbar-nav flex-column'>
                            <li className="nav-item border-0" >
                                <Link to="/login" className="nav-link btn-lg text-left px-3 py-1 fs-6" aria-current="page" type="button" onClick={reMoveData}>
                                    <CgLogOut className="nav-icon"/>
                                    <span>Sign Out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>                 
                </div>               
            </div>  
        </>
    )
}
