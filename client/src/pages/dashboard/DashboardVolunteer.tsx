import { MyMentees, goalsList, notificationsList, doughnutChartData, barChartData, getSessionStats, getActiveGoalsList } from './DashboardDataVolunteer'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { ListGroup, Spinner }from 'react-bootstrap/';
import DashboardDoughnut from '../../components/DashboardComponents/DashboardDoughnut';
import { DashboardBarChart } from '../../components/DashboardComponents/DashboardBarChart';
import { useEffect, useState } from 'react';

type goalsDataType ={
    goals: goalDataType[];
}

type goalDataType = {
    _id: string;
    mentorID: number;
    menteeName: string;
    date: string;
    reviewDate: string;
    notes: string;
    status: string[];
    "__v": number;
};

let sampleActiveGoalArray: goalDataType[] = [
    {
      _id: "",
      mentorID: 0,
      menteeName: "",
      date: "",
      reviewDate: "",
      notes: "",
      status: [""],
      __v: 0
    }
  ];

function DashboardVolunteer() {

    const [sessionRecords, setSessionRecords] = useState<any>(undefined);
    const [attendedSession, setAttendedSession] = useState(0);
    const [missedSession, setMissedSession] = useState(0);
    const [upcomingSession, setUpcomingSession] = useState(0);
    const [activeGoalsList, setActiveGoalsList] = useState<goalsDataType>(
        {
            goals:sampleActiveGoalArray
    });

    useEffect(() => {
        console.log("inside useEffect volunteer");
        getSessionStats()
        .then(response => {
            setSessionRecords(response);
            setAttendedSession(response.data.AttendedSessions);
            setMissedSession(response.data.MissedSessions);
            setUpcomingSession(response.data.UpcomingSessions);
            console.log(response.data);
        
        })
        .catch(err => {
            console.log(err);
        });

        getActiveGoalsList()
        .then(response => {
            console.log(response.data);
            setActiveGoalsList(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="container p-2 mt-5">
            <div className="row" id='dashboard-title'>
                <h5 style={{fontSize: 65, color:'#FF1E89'}}>Welcome, <strong>Mentor</strong>!</h5>
            </div>

            {!sessionRecords && !activeGoalsList &&
                <div className = "loading">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div>
            } 

            <div className="row justify-content-center">
                <div className="col-lg-6 mb-4">
                    <div className="square square-lg">
                        <h2 className="dashboard-title">Sessions Statistics</h2>
                    </div>
                    <DashboardBarChart data={barChartData(attendedSession, missedSession, upcomingSession)}/>
                </div>
                
                <div className="col-lg-6 mb-4">
                    <div className="square square-lg">
                        <h2 className="dashboard-title">Questionnaires</h2>
                    </div>
                    <DashboardDoughnut
                        data={doughnutChartData}
                        height={330}
                        width={400}
                    />
                </div>

            </div>

            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="square square-lg">
                        <h2 className="dashboard-title">Active Goals</h2>
                    </div>
                    <ListGroup id="dashboard-list-group">
                        {activeGoalsList.goals.map((goals, index) => (
                            <ListGroup.Item key={index}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{goals.menteeName}, {goals.date}</div>
                                    <div className="reviewDate">Review on {goals.reviewDate}</div>
                                    <div className="listgroup-info">{goals.notes}</div>
                                </div>
                                
                            </ListGroup.Item>
                        ))}
                    </ListGroup> 
                </div>
                
                <div className="col-lg-4 mb-4">
                    <div className="square square-lg">
                        <h2 className="dashboard-title"> Active Mentees</h2>
                    </div>
                    <ListGroup id="dashboard-list-group">
                        {MyMentees.map(mentee => (
                            <ListGroup.Item key={mentee.name}>
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

                <div className="col-lg-4 mb-4">
                    <div className="square square-lg">
                        <h2 className="dashboard-title">Latest Notifications</h2>
                    </div>
                    <ListGroup id="dashboard-list-group">
                        {notificationsList.map(notifs => (
                            <ListGroup.Item key={notifs.title}>
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