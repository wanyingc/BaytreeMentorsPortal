import React, { useState } from 'react'
import './timecard.css'
import { Container, Col, Row, ListGroup, Form, Button, ToggleButton } from "react-bootstrap/";
import { mentees, radiosAttended } from './CreateSessionData';

// Event Calendar imported from https://www.npmjs.com/package/react-big-calendar

const topLeftColNum = 5;
const toprightColNum = 12 - topLeftColNum;

const CreateSession = () => {

  const [mentee, setMentee] = useState("");
  const [radioAttended, setRadioAttended] = useState("1");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [note, setNote] = useState("");
  
  const CreateSession = () => {
    console.log(mentee)
    console.log(date)
    console.log(start)
    console.log(end)
    console.log(note)
  }

  const selectMentee = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setMentee(value);
  }
  return (
    <div className="container-lg mt-5">

      {/* <h3>Create Session</h3>
      <hr /> */}

      <Row className="justify-content-md-center">
        <Col md={8}>
        
            <Row as={Row} className="mb-3">
              <Col md={4}>
                <label>Mentee:</label>
              </Col>
              <Col md={8}>
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

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Session:
              </Form.Label>
              <Col sm="8"> 
                {radiosAttended.map((radio, index) => (
                  <ToggleButton
                    key={index}
                    id={`radio-${index}`}
                    type="radio"
                    variant={index % 2 ? 'outline-success' : 'outline-success'}
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
              <Form.Label column sm="4">
                Date:
              </Form.Label>
              <Col sm="8"> 
                <Form.Control type="date" onChange={(event) => setDate(event.target.value)}/>
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
              Start Time:
              </Form.Label>
              <Col sm="8"> 
                <Form.Control type="time" onChange={(event) => setStart(event.target.value)}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                End Time:
              </Form.Label>
              <Col sm="8"> 
                <Form.Control type="time" onChange={(event) => setEnd(event.target.value)}/>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Notes:
              </Form.Label>
              <Form.Control as="textarea" rows={12} onChange={(event) => setNote(event.target.value)}/>
            </Form.Group>

            <Button
              onClick={CreateSession}
              className="mb-3"
            >
              Add Session
            </Button>
        </Col>

      </Row>
    </div>
  );
}

export default CreateSession;