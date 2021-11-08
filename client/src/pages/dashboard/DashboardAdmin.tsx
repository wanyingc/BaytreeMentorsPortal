import React, { useState, useEffect } from 'react';
import DashboardLineChart from '../../components/DashboardComponents/DashboardLineChart';
import { dataRecentSessions, dataUpcomingSessions, dataUsers, SessionsDoneStackedData, SessionsLeftStackedData } from './DashboardDataAdmin';
import { columnsMentors, columnsSessionsMentors, mentorTypes} from './DashboardDatatypes';
import { Dropdown } from "react-bootstrap/";
import EventCalendar from '../../components/EventCalendar';
import './Dashboard.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { DashboardStackedBar } from '../../components/DashboardComponents/DashboardStackedBar';

function getScreenSize () {
    if(window.innerWidth < 768) {
        return true;
    } else {
        return false;
    }
}

export default function DashboardAdmin() {
    const [isMobile, setIsMobile] = useState(getScreenSize);

    const manageResize = () => {
        setIsMobile(getScreenSize);
    }

    useEffect(() => {
        window.addEventListener("resize", manageResize);
        return () => {
            window.removeEventListener("resize", manageResize)
        }
    }, [isMobile]);

    const [mentorTableTitle, setMentorTableTitle] = useState(mentorTypes[0])

// ======================== Render Starts =======================
    const renderDropdownMentors = mentorTypes.map((mentorType, index) => {
        return(
            <Dropdown.Item 
                key={index} 
                onClick={()=> setMentorTableTitle(mentorType)} 
            >
                {mentorType}
            </Dropdown.Item>
        );
    });

    const renderHeaderMentors = (
        <div className="ms-2 bg-transparent border-0">
            <div className="container d-flex justify-content-between mx-0 px-3 text-light table-header-bg-blue rounded-pill fs-3">
                <div className="fs-4 align-self-center">
                    {mentorTableTitle}
                </div>
                <Dropdown 
                    id="dropdown-basic-button me-2" 
                    className="" title="">
                    <Dropdown.Toggle className="bg-transparent border-0" split variant="success" id="dropdown-custom-2" />
                    <Dropdown.Menu className="">
                        {renderDropdownMentors}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
// ======================== Render Ends =======================

    return (
        <div className="container p-2 mt-5">
            <div className="row">
            <h5 className="fs-3">Welcome, <strong>Admin</strong>!</h5>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-8 mb-4">
                    <div className="row">
                        <div className="col-xl-8 col-md-6 col-sm-12 mb-4">
                            <div className="container h-100 bt-h-300">
                                <DashboardStackedBar
                                    title="Sessions Completed" data={SessionsDoneStackedData}
                                />
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
                            <div className="container h-100">
                                
                            </div>                            
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className={`card h-100 px-0 d-card`}>
                                    {renderHeaderMentors}
                                <div className="">
                                    <BootstrapTable keyField='id' data={ dataUsers } columns={ columnsMentors } bordered={ false }/>            
                                </div>
                            </div>                           
                        </div>
                        <div className="col-xl-6">
                            <div className={`card h-100 px-0 d-card`}>
                                    {renderHeaderMentors}
                                <div className="">
                                    <BootstrapTable keyField='id' data={ dataUsers } columns={ columnsMentors } bordered={ false }/>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 mb-4 mt-0 bg-grey ">                    
                    <div className="row mb-4 mx-1">
                        <div className={`card h-100 px-0 d-card`}>
                            <div className="card-header fs-5">
                                Upcoming Sessions
                            </div>
                            <div className="">
                                <BootstrapTable keyField='id' data={ dataUpcomingSessions } columns={ columnsSessionsMentors } bordered={ false }/>            
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2 mx-1">
                        <div className={`card h-100 px-0 d-card`}>
                            <div className="card-header fs-5">
                                Recent Sessions
                            </div>
                            <div className="">
                                <BootstrapTable keyField='id' data={ dataRecentSessions } columns={ columnsSessionsMentors } bordered={ false }/>            
                            </div>
                        </div>
                    </div>                      
                </div>
            </div>            
        </div>
    )
}
