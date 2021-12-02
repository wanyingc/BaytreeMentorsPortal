import './goals.css';
import { Form, Row, Col, ListGroup, Button } from 'react-bootstrap/';
import { goalsList, MyMentees } from '../dashboard/DashboardDataVolunteer';
import Axios from 'axios';
import { getAccessToken, getPersonID } from '../../auth/Authenticator';
import { BASE_API_URL } from '../../config/config';
import { useState } from 'react';

const Goals = () => {

  const currDate = new Date();
  const currDateString = `${currDate.getFullYear()}-${(currDate.getMonth() + 1) < 10 ? "0" : ""}${currDate.getMonth()+1}-${currDate.getDay() < 10 ? "0" : ""}${currDate.getDay()}`;


  const statusArray = ["In Progress", "Achieved", "Not Achieved"];

  const [menteeName, setMenteeName] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("in_progress");

  const changeStatusName = () => {
    if (status === "In Progress"){
      setStatus("in_progress");
    }
    else if(status === "Achieved"){
      setStatus("achieved");
    }
    else if (status === "Not Achieved"){
      setStatus("not_achieved");
    }
  }


  const mentorID = getPersonID();


  console.log(currDateString, currDate.getDay());

  const createGoal = () => {
    getGoalResponse();
  }

  const getGoalResponse = () => {
    let accessToken = getAccessToken();
    Axios.post(`${BASE_API_URL}/auth/mentor/goal`,
        {
          "mentorID": mentorID,
          "menteeName": menteeName,
          "date": startingDate,
          "reviewDate": reviewDate,
          "notes": notes,
          "status": [status],
        },
        {
            headers: {
            "x-access-token": accessToken
        }
    })
    .then(response => {
        console.log(response.data);
        
    })
    .catch((err) => {
      
    });   
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="page-title">Goals</h2>
      </div>
      
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="square square-lg">
            <h3 className="dashboard-title">Goals History</h3>
          </div>
         
          <ListGroup id="goals-list-group">
            {goalsList.map((goals,index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md="8">
                    <div className="fw-bold">{goals.mentee}, {goals.date}</div>
                    <div className="reviewDate">Review on {goals.reviewDate}</div>
                    <div className="listgroup-info">{goals.notes}</div>
                  </Col>
                  <Col sm="4">
                    <Form.Control as="select" className="changeStatusButton" onChange={e => {setStatus(e.target.value); console.log(e.target.value);}}>
                      
                      {goalsList.map((goals,index) => (
                        <option key={index} value={statusArray[index]}> {statusArray[index]} </option>
                      ))} 
                    </Form.Control>
                  </Col>
                </Row>
            
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="square square-lg">
            <h3 className="dashboard-title">Create Goal</h3>
          </div>
          
          <Form>
          <Form.Group as={Row} className="mb-3" controlId="formMenteeName">
            <Form.Label column sm="6" style={{fontSize: 20}}>Mentee: </Form.Label>
            <Col sm="6">
                <Form.Control as="select" className="form-select" onChange={e => {setMenteeName(e.target.value)}}>
                  <option>Select Mentee</option>
                  {MyMentees.map(mentee => (
                    <option key={mentee.name} value={mentee.name}> {mentee.name} </option>
                  ))}
                </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formEndDate">
            <Form.Label column sm="6" style={{fontSize: 20}}>Date: </Form.Label>
            <Col sm="6">
                <Form.Control type="date" min={currDateString} onChange={e => {setStartingDate(e.target.value)}}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formReviewDate">
            <Form.Label column sm="6" style={{fontSize: 20}}>Review Date: </Form.Label>
            <Col sm="6">
                <Form.Control type="date" min={currDateString} onChange={e => {setReviewDate(e.target.value)}}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formStatus">
            <Form.Label column sm="6" style={{fontSize: 20}}>Status: </Form.Label>
            <Col sm="6">
                <Form.Control placeholder="In Progress" disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formNotes">
            <Col sm="12">
                <Form.Control as="textarea" rows={5} placeholder="Type your goals here..." onChange={e => {setNotes(e.target.value)}} />
            </Col>
          </Form.Group>
          
          <div className="d-flex justify-content-end">
            <Button id ="create-goal-button" variant="primary" className="btn btn-primary rounded-pill" type="button" onClick={createGoal}>
              Create Goal
            </Button>
          </div>

          </Form>
        </div>

      </div>
    </div>
  );
}

export default Goals;