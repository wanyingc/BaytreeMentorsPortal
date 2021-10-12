import React, { useState } from 'react'
import container from 'react-bootstrap/Container'
import EventCalendar from '../../components/EventCalendar';
import DashboardListBlock from '../../components/DashboardListBlock'
import { Mentees, OverdueSubmissions, RecentSessions, UpcomingSessions } from './DashboardData_Volunteer'
import 'react-calendar/dist/Calendar.css';

const tableHeaders_volunteer = [ "Mentee Name", "Latest Session", "Mentee Attendance" ]
const tableHeaders_session = [ "Session Name", "Mentee Name", "Date"]


function Dashboard_Volunteer() {

    const renderRecentSessions = RecentSessions.map((session) => {
        return(
            <tr key={session.title} className="d-card-tr-0">
                <td>{session.title}</td>
                <td>{session.person}</td>
                <td>{session.date}</td>
            </tr>
        )

    });

    const renderUpcomingSessions = UpcomingSessions.map((session) => {
        return(
            <tr key={session.title} className="d-card-tr-0">
                <td>{session.title}</td>
                <td>{session.person}</td>
                <td>{session.date}</td>
            </tr>
        )

    });

    const renderOverdueSubmissions = OverdueSubmissions.map((session) => {
        return(
            <tr key={session.title} className="d-card-tr-0">
                <td>{session.title}</td>
                <td>{session.person}</td>
                <td>{session.date}</td>
            </tr>
        )
    });

    const renderMenteeTableDetail = Mentees.map((row) => {
        return(
            <tr key={row.name} className="d-card-tr-0">
                <td>{row.name}</td>
                <td>{row.lastSession}</td>
                <td>{row.attendence}</td>
            </tr>
        );
    });

    return (
        <div className="container p-2 mt-5">

            <div className="row">
                <h5 className="fs-1">Welcome, <strong>User</strong>!</h5>
            </div>

            <div className="row justify-content-center">
                <div className="col-xl-8 col-md-8 mb-4">

                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
                                        Recent Sessions
                                </div>}
                                theaders={tableHeaders_session}
                            >
                            {renderRecentSessions}    
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="text-light table-header-bg-blue rounded-pill px-3 fs-3 mb-3">
                                    Session Schedule
                                </div>}
                            >
                            <EventCalendar />
                            </DashboardListBlock>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
                                    Overdues
                                </div>}
                            >
                            {renderOverdueSubmissions}
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
                                    Mentees
                                </div>}
                                theaders={tableHeaders_volunteer}
                            >
                                {renderMenteeTableDetail}
                            </DashboardListBlock>
                        </div>
                    </div>

                </div>

                <div className="col-xl-4 col-md-4 mb-auto align-self-center ">

                        <div className="row mb-4 mx-1">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header text-light bg-info rounded-pill fs-4 mt-5">
                                        Upcoming Sessions
                                </div>}
                                theaders={tableHeaders_session}
                            >
                            {renderUpcomingSessions}
                            </DashboardListBlock>                            
                        </div>

                </div>
            </div>  
                       
        </div>
    )
}

export default Dashboard_Volunteer;