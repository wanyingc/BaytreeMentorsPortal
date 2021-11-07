import React, { useState } from 'react'
import './timecard.css'
import { Container, Col, Row, ListGroup, Form, Button } from "react-bootstrap/";

// Event Calendar imported from https://www.npmjs.com/package/react-big-calendar


const mentees = [
  {
      id: 1,
      name: 'Mentee 1',
  },
  {
      id: 2,
      name: 'Mentee 2',
  },
  {
      id: 3,
      name: 'Mentee 3',
  },
];

type SessionObject = {
  id: number;
  mentee: string;
  date: string;
  start: string;
  end: string;
  notes: string;
};

const sessionHistory: SessionObject[] = [
  {
    id: 1,
    mentee: 'Mentee 1',
    date: '2021-11-06',
    start: '3:00PM',
    end: '4:00PM',
    notes: 'Worked hard on math'
  },
  {
    id: 2,
    mentee: 'Mentee 2',
    date: '2021-11-05',
    start: '2:00PM',
    end: '3:00PM',
    notes: 'Worked hard on english'
  },
  {
    id: 3,
    mentee: 'Mentee 3',
    date: '2021-11-04',
    start: '1:00PM',
    end: '2:00PM',
    notes: 'Worked hard on cooking'
  },  
];



function CreateSession(){

  const [mentee, setMentee] = useState("");
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
    <Container>

      <h3>Create Session</h3>
      <hr />

      <Row>

        <Col sm={5} md={5} lg={5}>
        
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
              <Form.Control as="textarea" rows={5} onChange={(event) => setNote(event.target.value)}/>
            </Form.Group>

            <Button
              onClick={CreateSession}
            >
              Add Session
            </Button>
        </Col>

        <Col sm={7} md={7} lg={7}>
          <h1 className="display-5 text-center">Session History</h1>
          <ListGroup className="mb-3">
            {sessionHistory.map(session => (
                    <ListGroup.Item key={session.id}> 
                      <p className="lead">{session.mentee}</p>
                      {session.date}<br/>
                      {session.start}-{session.end}
                      <p><strong>{session.notes}</strong></p>
                    </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>

      </Row>
    </Container>
  );
}

export default CreateSession;