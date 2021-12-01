import './goals.css';
import { Form, Row, Col, ListGroup, Button } from 'react-bootstrap/';
import { goalsList, MyMentees } from '../dashboard/DashboardDataVolunteer';
import Axios from 'axios';
import { getAccessToken } from '../../auth/Authenticator';
import { BASE_API_URL } from '../../config/config';

const Goals = () => {

  const currDate = new Date();
  const currDateString = `${currDate.getFullYear()}-${(currDate.getMonth() + 1) < 10 ? "0" : ""}${currDate.getMonth()+1}-${currDate.getDay() < 10 ? "0" : ""}${currDate.getDay()}`;

  console.log(currDateString, currDate.getDay());

  const createGoal = () => {
    getGoalResponse();
  }

  const getGoalResponse = () => {
    let accessToken = getAccessToken();
    Axios.post(`${BASE_API_URL}/auth/mentor/goal`,
        {
          "goalID": 1,
          "menteeName": "Mira Jane",
          "mentorEmail": "test@exmaple.com",
          "date": "2021-12-01",
          "reviewDate": "2021-12-02",
          "notes": "First goal.",
          "status": ["in_progress"],
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
        <div className="col-lg-6 col-md-6 mb-4">
          <h3>Goals History</h3>
          <ListGroup id="goals-list-group">
            {goalsList.map(goals => (
              <ListGroup.Item key={goals.id}>
                <div className="fw-bold">{goals.mentee}, {goals.date}</div>
                <div className="reviewDate">Review on {goals.reviewDate}</div>
                <div className="listgroup-info">{goals.notes}</div>
                <div className="listgroup-info">{goals.status}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="col-lg-6 col-md-6 mb-4">
          <h3>Create goal</h3>
          <Form>
          <Form.Group as={Row} className="mb-3" controlId="formMenteeName">
            <Form.Label column sm="4" style={{fontSize: 20}}>Mentee: </Form.Label>
            <Col sm="8">
                <Form.Control as="select" className="form-select">
                  <option>Select Mentee</option>
                  {MyMentees.map(mentee => (
                    <option key={mentee.name} value={mentee.name}> {mentee.name} </option>
                  ))}
                </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formEndDate">
            <Form.Label column sm="4" style={{fontSize: 20}}>Date: </Form.Label>
            <Col sm="8">
                <Form.Control type="date" min={currDateString} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formReviewDate">
            <Form.Label column sm="4" style={{fontSize: 20}}>Review Date: </Form.Label>
            <Col sm="8">
                <Form.Control type="date" min={currDateString}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formEndDate">
            <Col sm="12">
                <Form.Control as="textarea" rows={5} placeholder="Type your goals here..." />
            </Col>
          </Form.Group>

          <Button variant="primary" className="btn btn-primary rounded-pill" type="button" onClick={createGoal}>
            Create Goal
          </Button>

          </Form>
        </div>

      </div>
    </div>
  );
}

export default Goals;