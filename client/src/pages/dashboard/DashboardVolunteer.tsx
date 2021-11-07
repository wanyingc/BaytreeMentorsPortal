import React, { useState } from 'react'
import { dataMentees, MyMentees, OverdueSubmissions, RecentSessions, UpcomingSessions } from './DashboardDataVolunteer'
import { columnsMentees, columnsOverdueMentees, columnsSessionsMentees, columnsMyMentees } from './DashboardDatatypes';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

const options ={
    sizePerPageList: [
        {
            text: '5', value: 5
        }, 
        {
            text: '10', value: 10
        }
    ]
    
};

function DashboardVolunteer() {

    return (
        <div className="container p-2 mt-5">
            <div className="row">
                <h5 className="fs-1">Welcome, <strong>User</strong>!</h5>
            </div>
            
            <div className="row">
                <h2>My Mentees</h2>
                <BootstrapTable
                    keyField='name'
                    data={MyMentees}
                    columns={columnsMyMentees}
                    pagination={ paginationFactory(options) }
                />
            </div>

            <div className="row justify-content-center">
                <h2>Sessions Statistics</h2>
            </div>

        </div>

        // <div className="container p-2 mt-5">

        //     <div className="row">
        //         <h5 className="fs-1">Welcome, <strong>User</strong>!</h5>
        //     </div>

        //     <div className="row justify-content-center">
        //         <div className="col-xl-8 col-md-8 mb-4">
        //             <div className="row justify-content-center mb-4">
        //                 <div className="col-xl-6">
        //                     <div className={`card h-100 px-0 d-card`}>
        //                         <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
        //                                 Recent Sessions
        //                         </div>
        //                         <BootstrapTable keyField='id' data={ RecentSessions } columns={ columnsSessionsMentees } bordered={ false }/>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-6">
        //                     <div className={`card px-0 d-card`}>
        //                         <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3 mb-3">
        //                             Session Schedule
        //                         </div>
        //                         <div className="">
        //                             <EventCalendar/>
        //                         </div>
        //                     </div>                    
        //                 </div>
        //             </div>

        //             <div className="row justify-content-center mb-4">
        //                 <div className="col-xl-6">
        //                     <div className={`card h-100 px-0 d-card`}>
        //                         <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
        //                             Overdues
        //                         </div>
        //                         <BootstrapTable keyField='id' data={ OverdueSubmissions } columns={ columnsOverdueMentees } bordered={ false }/>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-6">
        //                     <div className={`card h-100 px-0 d-card`}>
        //                         <div className="text-light table-header-bg-blue rounded-pill px-3 fs-3">
        //                             Mentees
        //                         </div>
        //                         <BootstrapTable keyField='id' data={ dataMentees } columns={ columnsMentees } bordered={ false }/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col-xl-4 col-md-4 mb-auto align-self-center ">
        //             <div className="row mb-4 mx-1">
        //                 <div className={`card h-100 px-0 d-card`}>
        //                     <div className="card-header text-light bg-info rounded-pill fs-3 mt-5">
        //                             Upcoming Sessions
        //                     </div>
        //                     <BootstrapTable keyField='id' data={ UpcomingSessions } columns={ columnsSessionsMentees } bordered={ false }/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>                         
        // </div>
    )
}

export default DashboardVolunteer;