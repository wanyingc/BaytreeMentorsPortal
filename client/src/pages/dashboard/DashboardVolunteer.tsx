import React, { useState } from 'react'
import { MyMentees } from './DashboardDataVolunteer'
import { columnsMyMentees } from './DashboardDatatypes';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Bar } from 'react-chartjs-2';

const tableOptions = {
    sizePerPageList: [
        {
            text: '5', value: 5
        }, 
        {
            text: '10', value: 10
        }
    ]
    
};

const barChartData = {
    labels: ['Sessions Completed', 'Sessions Missed', 'Upcoming Sessions'],
    datasets: [
        {
            label: '',
            data: [10, 2, 8],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)'],
            borderWidth: 1,
        },
    ],
};


function DashboardVolunteer() {

    return (
        <div className="container p-2 mt-5">
            <div className="row">
                <h5 className="fs-1">Welcome, <strong>User</strong>!</h5>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 mb-4">
                    <h2>My Mentees</h2>
                    <BootstrapTable
                        keyField='name'
                        data={MyMentees}
                        columns={columnsMyMentees}
                        pagination={ paginationFactory(tableOptions) }
                    />
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                    <h2>Sessions Statistics</h2>
                    <Bar data={barChartData} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4 mb-4">
                    <h2>Upcoming Goals</h2>
                </div>

                <div className="col-lg-4 col-md-4 mb-4">
                    <h2>Notifications</h2>
                </div>

                <div className="col-lg-4 col-md-4 mb-4">
                    <h2>Monthly Form Progress</h2>
                </div>
            </div>


        </div>
    )
}

export default DashboardVolunteer;