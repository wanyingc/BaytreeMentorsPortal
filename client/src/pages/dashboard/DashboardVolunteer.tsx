import React, { useState } from 'react'
import { MyMentees, goalsList, notificationsList } from './DashboardDataVolunteer'
import { columnsMyMentees } from './DashboardDatatypes';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Form, Button, Row, Col, ListGroup }from 'react-bootstrap/';
import Dashboard from './Dashboard';
import DashboardDoughnut from '../../components/DashboardComponents/DashboardDoughnut';
import { DoughnutDataType } from '../../interfaces/DashboardInterfaces';

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
            label: 'Number of Sessions',
            data: [10, 2, 8],
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 0,
        },
    ],
    maintainAspectRatio:false
};

const doughnutChartData: DoughnutDataType = {
   labels: ['Completed', 'Incomplete'],
   datasets: [
       {
            label: 'Questionnaires',
            data: [10,2],
            backgroundColor: [
                'rgba(54, 162, 205, 0.5)',
                'rgba(255, 99, 132, 0.5)', 
            ],
            borderColor: [
                'rgba(54, 162, 205, 1)',
                'rgba(255, 99, 132, 1)', 
            ],
            borderWidth:0,
       },
   ],
}

function DashboardVolunteer() {

    return (
        <><div className="container p-2 mt-5">
            <div className="row">
                <h5 style={{fontSize: 65, color:'#FF1E89'}}>Welcome, <strong>User</strong>!</h5>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-4 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Sessions Statistics</h2>
                    <Bar data={barChartData} />
                </div>

                <div className="col-lg-3 col-md-3 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Questionnaires</h2>
                    <DashboardDoughnut data={doughnutChartData}/>
                </div>

                <div className="col-lg-3 col-md-3 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Notifications</h2>
                    <ListGroup data-spy="scroll">
                            {notificationsList.map(notifs => (
                                <ListGroup.Item key={notifs.title}>
                                    <text style={{fontSize: 17, fontWeight: 'bold'}}>{notifs.title}</text><br/>
                                    <text style={{fontSize: 14}}> {notifs.date}, {notifs.time}</text><br/>
                                    <text style={{fontSize: 14}}>{notifs.message}</text>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                </div>

                <div className="col-lg-12 col-md-12 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>My Mentees</h2>
                    <BootstrapTable
                        keyField='name'
                        data={MyMentees}
                        columns={columnsMyMentees}
                        pagination={paginationFactory(tableOptions)} />
                </div>
            </div>
        </div>
            <div className="container p-2 mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4">
                        <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Goals</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4">
                        <ListGroup data-spy="scroll">
                            {goalsList.map(goals => (
                                <ListGroup.Item key={goals.id}>
                                    <p className="lead"><strong>{goals.mentee}, {goals.date}</strong></p>
                                    <p>{goals.notes}</p>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>

                    <div id="create-goal-form" className="col-lg-6 col-md-6 mb-4">
                        <p> </p>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formMenteeName">
                                <Form.Label column sm="4" style={{fontSize: 20, fontWeight: 'bold'}}>Mentee: </Form.Label>
                                <Col sm="6">
                                    <Form.Control as="select" className="form-select">
                                        <option>Select Mentee</option>
                                        <option value="1"> Mira Jane </option>
                                        <option value="2"> Oliva Lane </option>
                                        <option value="3"> Tina Hudson </option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formEndDate">
                                <Form.Label column sm="4" style={{fontSize: 20, fontWeight: 'bold'}}>End Date: </Form.Label>
                                <Col sm="6">
                                    <Form.Control type="date" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formEndDate">
                                <Col sm="10">
                                    <Form.Control as="textarea" rows={5} placeholder="Type your goals here..." />
                                </Col>
                            </Form.Group>

                            <Button variant="primary" className="btn btn-primary rounded-pill" type="button">
                                Create Goal
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </>


        
    )
}

export default DashboardVolunteer;