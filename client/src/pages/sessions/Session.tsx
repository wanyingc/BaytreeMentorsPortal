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

type sessionNoteType = {
  Created: string;
  CreatedBy: string;
  Date: string;
  Note: string;
  NoteID: number;
  Private: string;
  Snippet: string;
  Type: string;
  TypeID: string;
  Updated: string;
  UpdatedBy: string;
};

let sampleSessionNote:sessionNoteType = {
  Created: "",
  CreatedBy: "",
  Date: "",
  Note: "",
  NoteID: 0,
  Private: "",
  Snippet: "",
  Type: "",
  TypeID: "",
  Updated: "",
  UpdatedBy: ""
};

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

  const [sessionNotesArray, setSessionNotesArray] = useState<sessionNoteType[]>([]);
  let notesArray: string[] = [];


  useEffect(() => {
    getSessionRecords();
    getSessionNotesObject();
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

  const getSessionNotesObject = () => {
    let accessToken = getAccessToken();
    Axios.post(
      `${BASE_API_URL}/auth/session-notes`, 
      {
        sessionID: sessionID
      },
      {
        headers: {
          "X-access-token": accessToken
        }
      }).then((d:any) => {
        setSessionNotesArray(d.data.sessionNotes);
    });
  }

  if(sessionNotesArray) {
    sessionNotesArray.map(sessionNote => {
      notesArray.push(sessionNote.Note);
    })
  }
  let str = notesArray.join("\n");

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
      {!endTime &&
        <div className = "loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
      <div className="square square-lg">  
        <h2 className="dashboard-title">Session Report</h2>
      </div>
      
   
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
            <Form.Control 
              readOnly 
              as="textarea" 
              rows={15} 
              defaultValue={str}/>
          </Form.Group>
        </Col>
        </Row>
      </Form>
      
    </Container>
  );
}
export default Session;





