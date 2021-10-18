import React, { useState } from 'react'
import EventCalendar from '../../components/EventCalendar';
import { dataMentees, OverdueSubmissions, RecentSessions, UpcomingSessions } from './DashboardDataVolunteer'
import 'react-calendar/dist/Calendar.css';
import { columnsMentees, columnsOverdueMentees, columnsSessionsMentees } from './DashboardDatatypes';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

function DashboardVolunteer() {

    return (
        <div className="container p-2 mt-5">

            <div className="row">
                <h5 className="fs-1">Welcome, <strong>User</strong>!</h5>
            </div>

            <div className="row justify-content-center">
                <div className="col-xl-8 col-md-8 mb-4">
                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <div className={`card h-100 px-0 d-card`}>
                                <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
                                        Recent Sessions
                                </div>
                                <BootstrapTable keyField='id' data={ RecentSessions } columns={ columnsSessionsMentees } bordered={ false }/>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className={`card px-0 d-card`}>
                                <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3 mb-3">
                                    Session Schedule
                                </div>
                                <div className="">
                                    <EventCalendar/>
                                </div>
                            </div>                    
                        </div>
                    </div>

                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <div className={`card h-100 px-0 d-card`}>
                                <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
                                    Overdues
                                </div>
                                <BootstrapTable keyField='id' data={ OverdueSubmissions } columns={ columnsOverdueMentees } bordered={ false }/>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className={`card h-100 px-0 d-card`}>
                                <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
                                    Mentees
                                </div>
                                <BootstrapTable keyField='id' data={ dataMentees } columns={ columnsMentees } bordered={ false }/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-4 mb-auto align-self-center ">
                    <div className="row mb-4 mx-1">
                        <div className={`card h-100 px-0 d-card`}>
                            <div className="card-header text-light bg-info rounded-pill fs-3 mt-5">
                                    Upcoming Sessions
                            </div>
                            <BootstrapTable keyField='id' data={ UpcomingSessions } columns={ columnsSessionsMentees } bordered={ false }/>
                        </div>
                    </div>
                </div>
            </div>                         
        </div>
    )
}

export default DashboardVolunteer;