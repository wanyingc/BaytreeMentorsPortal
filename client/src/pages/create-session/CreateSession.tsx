import React, { useEffect, useRef, useState } from 'react'
import './timecard.css'
import { Container, Col, Row, ListGroup, Form, Button, ToggleButton, Spinner } from "react-bootstrap/";
import { mentees, radiosAttended, sessionGroupIDs } from './CreateSessionData';
import Axios from 'axios';
import { getAccessToken, getPersonID } from '../../auth/Authenticator';
import { BASE_API_URL } from '../../config/config';

// Event Calendar imported from https://www.npmjs.com/package/react-big-calendar
// Cite: useRef from https://stackoverflow.com/questions/55075604/react-hooks-useeffect-only-on-update?rq=1

const topLeftColNum = 4;
const toprightColNum = 12 - topLeftColNum;

const CreateSession = () => {

  const [mentee, setMentee] = useState(mentees[0].name);
  const [sessionGroupID, setSessionGroupID] = useState(sessionGroupIDs[0].id)
  const [radioAttended, setRadioAttended] = useState("1");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [note, setNote] = useState("");
  const [sessionResponse, setSessionResponse] = useState<any>(undefined);
  const [submit, setSubmit] = useState(false);
  // const [sessionGroupIDs, setSessionGroupIDs] = useState<number[]>([])

  //////////////////////////// needs to get the data from backend upon page load //// session group id
  const venueID = 3; //////////////////////////// needs to get the data from backend upon page load 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    getSessionConfirmation();
  }

  const getSessionGroupIDs = () => {
    let accessToken = getAccessToken();
    let personID = getPersonID();
    Axios.get(
      `${BASE_API_URL}/auth/session-groupids/${personID}`,
      {
        headers: {
          "X-access-token": accessToken
        }
      }
    ).then((d:any) => {
        setSessionResponse(d.data);
      }).catch(err => {
      window.alert("Error occured, please try again");
    });
  }

  const getSessionConfirmation = () =>{
    let accessToken = getAccessToken();
    let personID = getPersonID();
    Axios.post(
      `${BASE_API_URL}/auth/create-session`, // TODO: change to appropriate endpoint -----------------------------------
      {
        personID: personID,
        sgid: sessionGroupID,
        venueID: venueID,
        mentee: mentee,
        date: date,
        start: start,
        end: end,
        note: note,
        attended: radioAttended === "1" ? true : false
      },
      {
        headers: {
          "X-access-token": accessToken
        }
      }
    ).then((d:any) => {
        setSessionResponse(d.data);
        setSubmit(false);
      }).catch(err => {
      setSubmit(false);
      window.alert("Error occured, please try again");
    });
  }

  const selectMentee = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setMentee(value);
  }
  
  const selectSGID = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const valueNumber = parseInt(value);
    setSessionGroupID(valueNumber);
  }
  return (
    <div className="container-lg mt-5">

      <Row className="justify-content-md-center">
        <Col md={8}>
          {submit &&
            <div className = "loading">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          }
        
          <Row as={Row} className="mb-3">
            <Col md={topLeftColNum}>
              <label>Mentee:</label>
            </Col>
            <Col md={toprightColNum}>
              <select id="selectMentee" 
                className="form-select" 
                aria-label="Default select example"
                onChange={selectMentee}>
                {mentees.map(mentee => (
                  <option key={mentee.id} value={mentee.name}> {mentee.name} </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row as={Row} className="mb-3">
            <Col md={topLeftColNum}>
              <label>Session Groups:</label>
            </Col>
            <Col md={toprightColNum}>
              <select id="selectSGID" 
                className="form-select" 
                aria-label="Default select example"
                onChange={selectSGID}>
                {sessionGroupIDs.map(sessionGroup => (
                  <option key={sessionGroup.id} value={sessionGroup.id}> {sessionGroup.name} </option>
                ))}
              </select>
            </Col>
          </Row>
          <form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={`${topLeftColNum}`}>
                Session:
              </Form.Label>
              <Col sm={toprightColNum}> 
                {radiosAttended.map((radio, index) => (
                  <ToggleButton
                    key={index}
                    id={`radio-${index}`}
                    type="radio"
                    variant={index % 2 ? 'outline-warning' : 'outline-success'}
                    name="radio"
                    value={radio.value}
                    checked={radioAttended === radio.value}
                    onChange={(e) => {
                      setRadioAttended(e.currentTarget.value);
                      console.log(radioAttended);
                    }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={`${topLeftColNum}`}>
                Date:
              </Form.Label>
              <Col sm={toprightColNum}> 
                <Form.Control type="date" onChange={(event) => setDate(event.target.value)}/>
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" disabled={radioAttended === "1" ? false : true} style={radioAttended === "1" ? {} : { pointerEvents: 'none' }}>
              <Form.Label column sm={`${topLeftColNum}`}>
              Start Time:
              </Form.Label>
              <Col sm={toprightColNum}> 
                <Form.Control type="time" onChange={(event) => {setStart(event.target.value); console.log(event.target.value)}}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" disabled={radioAttended === "1" ? false : true} style={radioAttended === "1" ? {} : { pointerEvents: 'none' }}>
              <Form.Label column sm={`${topLeftColNum}`}>
                End Time:
              </Form.Label>
              <Col sm={toprightColNum}> 
                <Form.Control type="time" onChange={(event) => setEnd(event.target.value)}/>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3">
              {radioAttended === "1" ? <Form.Label>Session Notes</Form.Label> : <Form.Label>Reason why session did not occur</Form.Label>}
              <Form.Control as="textarea" rows={12} onChange={(event) => setNote(event.target.value)}/>
            </Form.Group>

            <Button
              className="mb-3"
              type="submit"
            >
              Add Session
            </Button>
          </form>
        </Col>

      </Row>
    </div>
  );
}

export default CreateSession;