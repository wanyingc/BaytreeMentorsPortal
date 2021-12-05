import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { getAccessToken } from "../../auth/Authenticator";
import { BASE_API_URL } from '../../config/config';
import './Sessions.css'
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "react-bootstrap/Form";
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Spinner, Row, Col, Button } from 'react-bootstrap';


type sessionType = {
    Duration: string;
    ParticipantID: number;
    SessionGroupID: string;
    SessionID: string;
    StartDate: string,
    Status: string;
    Title: string;
    Type: string;
};

let sampleSession: sessionType = {
    Duration: "",
    ParticipantID: 0,
    SessionGroupID: "",
    SessionID: "",
    StartDate: "",
    Status: "",
    Title: "",
    Type: ""
};


const Session = ()  => {

  //Retrieve personID and sessionID from RecordsBase 
  const personObject = useParams<any>();
  const personID = parseInt(personObject.personID);
  const sessionID = personObject.SessionID;

  //sessionRecords = array of session objects
  //session = a session object.
  const [sessionRecords, setSessionRecords] = useState<sessionType[]>([]);
  const [session, setSession]= useState<sessionType>(sampleSession);
  const [endTime, setEndTime] = useState<any>(undefined);

  useEffect(() => {
    getSessionRecords();
  }, []);

  const getSessionRecords = () => {
    let accessToken = getAccessToken();
    Axios.post(
      `${BASE_API_URL}/auth/records`, 
      {
        personID: personID,
      },
      {
        headers: {
          "X-access-token": accessToken
        }
      }).then((d:any) => {
        setSessionRecords(d.data.sessions);
    });
  }

  // [sessionRecords] is for whenever sessionRecords changes, then this useEffect will run getSessionFromList();
  useEffect(() => {
    getSessionFromList();
  }, [sessionRecords]);

  const getSessionFromList = () => {
    if(sessionRecords.find(obj => obj.SessionID === sessionID)){
      let tempSession = sessionRecords.find(obj => obj.SessionID === sessionID)!;
      setSession(tempSession);
      
      //To prevent further re-rendering, we have the setEndTime function here.
      setEndTime(addTimes(tempSession.Duration, (tempSession.StartDate).substring(11,)));
    }
  }

  // console.log(endTime);

  //https://stackoverflow.com/questions/25764553/add-2-times-together-javascript
  function timeInMinutes(time):number {
    var splitHrMins = time.split(':');
    var mins = parseInt(splitHrMins[0])*60 + +splitHrMins[1];
    return mins;
  }
  function timeFromMinutes(mins:number):string {
    var hours = Math.floor(mins/60) % 24;
    var minutes = mins % 60;
    return zeroPadding(hours) + ':' + zeroPadding(minutes);
  }
  function zeroPadding(val):string {
    if(val < 10) {
      return '0' + val;
    }
    return '' + val;
  }
  function addTimes(time1, time2):string {
    return timeFromMinutes(timeInMinutes(time1) + timeInMinutes(time2));
  }

   
  return(
    <Container>

      {/* Spinner for loading */}
      {!sessionRecords && !endTime &&
        <div className = "loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
      <h2>Session Report</h2>
      <hr />  
      <Form>
        <Row>

        <Col lg="6">
        <Form.Group className="mb-3">

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control readOnly type="text" defaultValue={session.Title}/>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control readOnly type="text" defaultValue={(session.StartDate).substring(0,10)}/>
          </Form.Group>

          <Form.Group as={Row}>
            <Col md="4">
              <Form.Label >Start Time</Form.Label>
              <Form.Control readOnly type="text" defaultValue={(session.StartDate).substring(11,)}/>
            </Col>
            <Col md="4">
              <Form.Label>Duration</Form.Label>
              <Form.Control readOnly type="text" defaultValue={session.Duration}/>
            </Col>
            <Col md="4">
              <Form.Label >End Time</Form.Label>
              <Form.Control readOnly type="text" defaultValue={endTime}/>
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control readOnly type="text" defaultValue={session.Status}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Control readOnly type="text" defaultValue={session.Type}/>
          </Form.Group>

        </Form.Group>
        </Col>

        <Col lg="6">
        <Form.Group className="mb-3">
            <Form.Label>Session Notes</Form.Label>
            <Form.Control readOnly as="textarea" rows={15} defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          </Form.Group>
        </Col>

        </Row>
      </Form>
      
    </Container>







          // <Form>
          // <Container>
          // <div className="Header_main_session_page">
          // <div className="sessionsText">
          //     <text className="HeaderText_main_session_page">Sessions Report</text>
          // </div>
          // </div>
          // <Form.Group controlId="session-name"> 

          //     <div className="d-flex justify-content-between align-items-center mb-3">
          //         <h4 className="text-right">Session Information</h4>
          //     </div>

  
          //       <Field name="Date" readOnly type="text" component={ReduxFormInput} label="Date of session" placeHolder="Enter Date" />
     
          
          //       <Field name="Time" readOnly type="text" component={ReduxFormInput} label="Time" placeHolder="Enter Time" />
            
          //     <Field name="Duration" readOnly type="text" component={ReduxFormInput} label="Duration" placeHolder="Enter Duration" />
          //     <Field name="Cancelled" readOnly type="text" component={ReduxFormInput} label="Cancelled" placeHolder="Cancelled?" />
          //     <Field name="Venue" readOnly type="text" component={ReduxFormInput} label="Venue" placeHolder="Enter venue" />
          //     <Field name="Activity" readOnly type="text" component={ReduxFormInput} label="Acitvity" placeHolder="Enter activity" />
          //     <Field name="Staff" readOnly type="text" component={ReduxFormInput} label="Staff Incharge" placeHolder="Enter occupation" />
          //     <Link to="/editSessions" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"center"}} >Edit Sessions</Link>
          //     <Link to="/notes" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"end"}} >View Sessions Notes</Link>
    
  
          // </Form.Group>

          // </Container>
          // </Form>
    
  );
}
export default Session;

