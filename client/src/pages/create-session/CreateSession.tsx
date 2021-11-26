import React, { useEffect, useRef, useState } from 'react'
import './timecard.css'
import { Container, Col, Row, ListGroup, Form, Button, ToggleButton, Spinner } from "react-bootstrap/";
import { mentees, radiosAttended } from './CreateSessionData';
import Axios from 'axios';
import { getAccessToken, getPersonID } from '../../auth/Authenticator';
import { BASE_API_URL } from '../../config/config';

// Event Calendar imported from https://www.npmjs.com/package/react-big-calendar
// Cite: useRef from https://stackoverflow.com/questions/55075604/react-hooks-useeffect-only-on-update?rq=1

const topLeftColNum = 4;
const toprightColNum = 12 - topLeftColNum;

const CreateSession = () => {

  const [mentee, setMentee] = useState(mentees[0].name);
  const [radioAttended, setRadioAttended] = useState("1");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [note, setNote] = useState("");
  const [sessionResponse, setSessionResponse] = useState<any>(undefined);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    getSessionConfirmation();
  }

  const getSessionConfirmation = () =>{
    let accessToken = getAccessToken();
    let personID = getPersonID();
    Axios.post(
      `${BASE_API_URL}/auth/create-session`, // TODO: change to appropriate endpoint -----------------------------------
      {
        personID: personID,
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
      window.alert("Session couldn't be create, please try again");
    });
  }

  const selectMentee = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setMentee(value);
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
                <Form.Control type="time" onChange={(event) => setStart(event.target.value)}/>
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