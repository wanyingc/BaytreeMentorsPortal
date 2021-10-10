import React, { useState } from 'react';
import DashboardLineChart from '../../components/DashboardLineChart';
import DashboardListBlock from '../../components/DashboardListBlock';
import { Users, RecentSessions } from './DashboardData';
import { Dropdown, DropdownButton } from "react-bootstrap/";
import { Calendar } from '../../components/Calendar';
import DashboardDoughnut from '../../components/DashboardDoughnut';

const tableHeaders = [ "Name", "Last Session", "Attendence" ];
const mentorTypes = [ "Mentors", "Youth Mentors", "Into School Mentors" ]

export default function Dashboard() {

    const [mentorTableTitle, setMentorTableTitle] = useState(mentorTypes[0])

    const chartData1: number[] = [5, 3, 9, 12];
    const chartData2: number[] = [50, 30, 90, 120];

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
                                        Upcoming Sessions
                                    </div>}
                                heightCSSClass="h-50"
                            >
                                <DashboardDoughnut/>
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        Upcoming Sessions
                                    </div>}
                                heightCSSClass="h-100"
                            >
                                <DashboardLineChart/>
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
                                <Calendar/>
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5 bg-transparent border-0">
                                                <div className="container d-flex justify-content-between mx-0 px-0">
                                                    <strong>{mentorTableTitle}</strong>
                                                    <DropdownButton id="dropdown-basic-button" title="">
                                                        {mentorTypes.map((mentorType, index) => {
                                                            return(
                                                                <Dropdown.Item onClick={()=> setMentorTableTitle(mentorType)} href="#/action-1">{mentorType}</Dropdown.Item>
                                                            );
                                                        })}
                                                    </DropdownButton>
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
