import './goals.css';
import { Form, Row, Col, ListGroup, Button, ToggleButton } from 'react-bootstrap/';
import { MyMentees } from '../dashboard/DashboardDataVolunteer';
import Axios from 'axios';
import { getAccessToken, getPersonID } from '../../auth/Authenticator';
import { BASE_API_URL } from '../../config/config';
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

let sampleGoalArray: goalDataType[] = [
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

const Goals = () => {

  const currDate = new Date();
  const currDateString = `${currDate.getFullYear()}-${(currDate.getMonth() + 1) < 10 ? "0" : ""}${currDate.getMonth()+1}-${currDate.getDate() < 10 ? "0" : ""}${currDate.getDate()}`;


  const statusArray = [{name:"In Progress", value:'1'}, {name:"Achieved", value:'2'},{name:"Not Achieved", value:'3'},];

  const [menteeName, setMenteeName] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [notes, setNotes] = useState("");
  const initialStatus = "in_progress";
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [goalList, setGoalList] = useState<goalsDataType>(
    {
      goals: sampleGoalArray
    });



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

  const changeStatusNameReverse = (statusToChange: string) => {
    if (statusToChange === "in_progress"){
      return "In Progress";
    }
    else if(statusToChange === "achieved"){
      return "Achieved";
    }
    else if (statusToChange === "not_achieved"){
      return "Not Achieved";
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
          "status": [initialStatus],
        },
        {
            headers: {
            "x-access-token": accessToken
        }
    })
    .then((response:any) => {
        console.log(response.data);
        setGoalList(response.data);
        
    })
    .catch((err) => {
      
    });   
  }

  useEffect(() => {
    getGoalsList();
  },[]);

  const getGoalsList = () => {
    let accessToken = getAccessToken();
    Axios.post(`${BASE_API_URL}/auth/mentor/goalList`,
        {
          "mentorID": mentorID
        },
        {
            headers: {
            "x-access-token": accessToken
        }
    })
    .then((response:any) => {
        console.log(response.data);
        setGoalList(response.data);
    })
    .catch((err) => {
      
    });   
  }

  const pushStatusChanges = async () => {
    let accessToken = getAccessToken();
    changeStatusName();
    await Axios.put(`${BASE_API_URL}/auth/mentor/goalUpdate`,
        {
          "mentorID": mentorID,
          "id": id,
          "status": [status]
        },
        {
            headers: {
            "x-access-token": accessToken
        }
    })
    .then((response:any) => {
        console.log(response.data);
        setGoalList(response.data);        
    })
    .catch((err) => {
      
    });   
  }

  useEffect(() => {
    console.log("from duo useEffect");
    console.log(status, id);
    pushStatusChanges();
  }, [status, id]);

  return (
    <>
      <div className="container-fluid header-image-goals">
            <div className="container p-2">
                <div className="row justify-content-center mt-5" style={{backgroundColor:'#FF1E89', width:'fit-content'}}>
                    <h5 className="page-title">Goals</h5>
                </div>    
            </div>
      </div>
      
      <div className="container">
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="square square-lg">
              <h3 className="dashboard-title">Goals History</h3>
            </div>
          
            <ListGroup id="goals-list-group">
              {goalList.goals.map((goal,index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md="8">
                      <div className="fw-bold">{goal.menteeName}, {goal.date.substring(0,10)}</div>
                      <div className="reviewDate">Review on {goal.reviewDate.substring(0,10)}</div>
                      <div className="listgroup-info">{goal.notes}</div>
                    </Col>
                    <Col sm="4">
                      {statusArray.map((radio, index) => (
                        <ToggleButton
                          className={`w-100`}
                          key={index}
                          id={`radio-${index}`}
                          type="radio"
                          variant={index === 0 ? 'outline-warning' : index === 1 ? 'outline-success' : 'outline-danger'}
                          name="radio"
                          value={radio.value}
                          checked={changeStatusNameReverse(goal.status[0]) === radio.name}
                          onChange={(e) => {
                            setStatus(radio.name);
                            setId(goal._id);
                          }}
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
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

    </>
  );
}

export default Goals;