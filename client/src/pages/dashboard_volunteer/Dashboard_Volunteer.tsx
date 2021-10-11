import React, { useState } from 'react'
import container from 'react-bootstrap/Container'
import { Calendar } from '../../components/Calendar'
import DashboardListBlock from '../../components/DashboardListBlock'
import { Mentees, RecentSessions, UpcomingSessions } from './DashboardData_Volunteer'

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

    const renderUserTableDetail = Mentees.map((row) => {
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
                <h5>Welcome <strong>User</strong></h5>
            </div>

            <div className="row justify-content-center">
                <div className="col-xl-8 col-md-8 mb-4">

                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        Recent Sessions
                                </div>}
                                theaders={tableHeaders_session}
                            >
                            {renderRecentSessions}    
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                    Session Schedule
                                </div>}
                            >
                            <Calendar/>
                            </DashboardListBlock>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                    Placeholder
                                </div>}
                            >
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                    Mentees
                                </div>}
                                theaders={tableHeaders_volunteer}
                            >
                                {renderUserTableDetail}
                            </DashboardListBlock>
                        </div>
                    </div>

                </div>


                <div className="col-xl-4 col-md-4 mb-auto align-self-center bg-grey ">

                        <div className="row mx-2 mb-2">
                            <button type="button" className="btn btn-primary w-100 py-2 ">
                                Create Session
                            </button>
                            <button type="button" className="btn btn-primary w-100 py-2 my-4">
                                Delete Session
                            </button>
                        </div>

                        <div className="row mb-4 mx-1">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
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