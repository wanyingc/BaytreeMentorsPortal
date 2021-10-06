import React from 'react';
import logo from '../assets/logo.svg';
import { CgLogOut } from 'react-icons/cg';
import { FiBarChart2, FiBriefcase } from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import '../styles/Sidenav.css';

export default function Sidenav() {
    return (
        <>        
            <div className="navbar l-navbar"> 
                <div className="container nav-container">   
                    <div className="mt-2 nav-top-container">                
                        <a href="#" className="navbar-brand">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="mt-3">
                            <ul className='navbar-nav flex-column'>
                                <li className="nav-item btn fs-5 border-3">
                                    <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                        <BsIcons.BsSearch className="nav-icon"/>
                                    </a>
                                </li>
                                <li className="nav-item btn fs-5 border-3">
                                    <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                        <BsIcons.BsHouseDoor className="nav-icon"/>
                                    </a>
                                </li>
                                <li className="nav-item btn fs-5 border-3">
                                    <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                        <BsIcons.BsCalendar2Check className="nav-icon"/>
                                    </a>
                                </li>
                                <li className="nav-item btn fs-5 border-3">
                                    <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                        <BsIcons.BsChatLeft className="nav-icon"/>
                                    </a>
                                </li>
                                <li className="nav-item btn fs-5 border-3">
                                    <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                        <FiBriefcase className="nav-icon"/>
                                    </a>
                                </li>
                                <li className="nav-item btn fs-5 border-3">
                                    <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                        <FiBarChart2 className="nav-icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-3">
                        <ul className='navbar-nav flex-column'>
                            <li className="nav-item btn fs-5 border-3">
                                <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                    <BsIcons.BsBell className="nav-icon"/>
                                </a>
                            </li>
                            <li className="nav-item btn fs-5 border-3">
                                <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                    <BsIcons.BsGear className="nav-icon"/>
                                </a>
                            </li>
                            <li className="nav-item btn fs-5 border-3">
                                <a className="nav-link py-0 btn-font-color-secondary" aria-current="page" href="#">
                                    <CgLogOut className="nav-icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>                 
                </div>               
            </div>  
        </>
    )
}