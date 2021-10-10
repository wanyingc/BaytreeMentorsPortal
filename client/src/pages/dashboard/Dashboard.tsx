import React from 'react';
import DashboardGraph from '../../components/DashboardGraph';
import DashboardListBlock from '../../components/DashboardListBlock'
import { Users, RecentSessions } from './DashboardData'

export type UserObject = {
    name: string,
    lastSession: string,
    attendence: string
};

export type SessionObject = {
    title: string;
    person: string;
    date: string;
};

const tableHeaders = [ "Name", "Last Session", "Attendence"];
const headersRecentSessions = ["", ""]

export default function Dashboard() {

    const chartData: number[] = [5, 3, 9, 12, 2, 3];

    const renderUserTableDetail = Users.map((row) => {
        return(
            <tr className="d-card-tr-0">
                <td>{row.name}</td>
                <td>{row.lastSession}</td>
                <td>{row.attendence}</td>
            </tr>
        );
    });

    const renderRecentSessions = RecentSessions.map((session) => {
        return(
            <tr className="d-card-tr-0">
                <td>{session.title}</td>
                <td>{session.person}</td>
                <td>{session.date}</td>
            </tr>
        );
    });

    return (
        <div className="container p-2 mt-5">
            <div className="row">
                <h5>Welcome <strong>Saqib</strong></h5>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-9 col-md-9 mb-4">
                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        Unique and Aggregate Session Attendence
                                    </div>}
                                theaders={tableHeaders}
                            >
                                {renderUserTableDetail}
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        Session Attendence
                                    </div>}
                                theaders={tableHeaders}
                            >
                                {renderUserTableDetail}
                            </DashboardListBlock>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        Session Schedule
                                    </div>}
                            >
                                {renderUserTableDetail}
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5 bg-transparent border-0">
                                        <div className="container d-flex justify-content-between mx-0 px-0">
                                            <strong>Volunteers</strong>
                                            <div className="dropdown">
                                                <button 
                                                    className="btn btn-secondary dropdown-toggle" 
                                                    type="button" id="dropdownMenuButton1" 
                                                    data-bs-toggle="dropdown" 
                                                    aria-expanded="false"/>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Volunteers (all types)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Youth Mentors
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Into School Mentors
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>}
                                theaders={tableHeaders}
                            >
                                {renderUserTableDetail}
                            </DashboardListBlock>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-3 mb-4 align-self-center bg-grey ">                    
                        <div className="row mx-2 mb-2">
                            <button type="button" className="btn btn-primary w-100 py-2 my-4">
                                Create Session
                            </button>
                        </div>
                        <div className="row mb-4 mx-1">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        Upcoming Sessions
                                    </div>}
                            >
                                {renderRecentSessions}
                            </DashboardListBlock>                            
                        </div>
                        <div className="row mb-2 mx-1">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        Recent Sessions
                                    </div>}
                            >
                                {renderRecentSessions}
                            </DashboardListBlock>
                        </div>
                        

                </div>
            </div>            
        </div>
    )
}
