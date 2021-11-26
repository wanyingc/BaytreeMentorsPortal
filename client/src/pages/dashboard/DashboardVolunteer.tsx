import { MyMentees, goalsList, notificationsList, doughnutChartData, barChartData } from './DashboardDataVolunteer'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { ListGroup }from 'react-bootstrap/';
import DashboardDoughnut from '../../components/DashboardComponents/DashboardDoughnut';
import { DashboardBarChart } from '../../components/DashboardComponents/DashboardBarChart';

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


function DashboardVolunteer() {

    return (
        <div className="container p-2 mt-5">
            <div className="row" id='dashboard-title'>
                <h5 style={{fontSize: 65, color:'#FF1E89'}}>Welcome, <strong>Mentor</strong>!</h5>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-4 mb-4">
                    <h2 className="dashboard-title">Sessions Statistics</h2>
                    <DashboardBarChart data={barChartData} />
                </div>
                
                <div className="col-lg-6 col-md-4 mb-4">
                    <h2 className="dashboard-title">Questionnaires</h2>
                    <DashboardDoughnut
                        data={doughnutChartData}
                        height={330}
                        width={400}
                    />
                </div>

            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 mb-4">
                    <h2 className="dashboard-title">Active Goals</h2>
                    <ListGroup data-spy="scroll">
                        {goalsList.map(goals => (
                            <ListGroup.Item className="list-group" key={goals.id}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{goals.mentee}, {goals.date}</div>
                                    <div className="reviewDate">Review on {goals.reviewDate}</div>
                                    <div className="listgroup-info">{goals.notes}</div>
                                </div>
                                
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
                
                <div className="col-lg-4 col-md-4 mb-4">
                    <h2 className="dashboard-title"> Active Mentees</h2>
                    <ListGroup data-spy="scroll">
                        {MyMentees.map(mentee => (
                            <ListGroup.Item className="list-group" key={mentee.name}>
                                <div className="ms-2 me-auto">
                                    <div className="item-listgroup">{mentee.name}</div>
                                    <div className="listgroup-info">D.O.B.: {mentee.dateOfBirth}</div>
                                    <div className="listgroup-info">Age: {mentee.age}</div>
                                    <div className="listgroup-info">Start Date: {mentee.dateStart}</div>
                                    <div className="listgroup-info">Mentor Role: {mentee.mentorRole}</div>
                                </div>
                                
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>

                <div className="col-lg-4 col-md-4 mb-4">
                    <h2 className="dashboard-title">Latest Notifications</h2>
                    <ListGroup data-spy="scroll">
                        {notificationsList.map(notifs => (
                            <ListGroup.Item className="list-group" key={notifs.title}>
                                <div className="item-listgroup">{notifs.title}</div>
                                <div className="listgroup-info">{notifs.date}, {notifs.time}</div>
                                <div className="listgroup-info">{notifs.message}</div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>

            </div>
        </div>
            
    )
}

export default DashboardVolunteer;