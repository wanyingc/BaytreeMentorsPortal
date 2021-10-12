import React from 'react';
import './Report.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";



function Report() {
return (
    <Form>
        <Container id="Title">
            <Row>
                <h1 id="title">Mentoring Monthly Contact Report</h1>
            </Row>
            <Row id="nameBox">
                <Col>Mentee Name</Col>
                <Col>
                    <div><p id="menteeName">Test Name</p></div>
                </Col>
            </Row>
        </Container>
        <Container>
            <h1 id="header">Practical Support</h1>
            <Row>
                <Col md={6}>
                    <div id="question">
                        <p>My mentee is engaging well with mentoring sessions</p>
                    </div>
                </Col>
                <Col md={6}>
                <div className="col-md-8 col-md-pull-4" id="stars">
                    <input type="radio" id="one" name="rate" value="1"/>
                    <label htmlFor="one">1</label>
                    <input type="radio" id="two" name="rate" value="2"/>
                    <label htmlFor="two">2</label>
                    <input type="radio" id="three" name="rate" value="3"/>
                    <label htmlFor="three">3</label>
                    <input type="radio" id="four" name="rate" value="4"/>
                    <label htmlFor="four">4</label>
                    <input type="radio" id="five" name="rate" value="5"/>
                    <label htmlFor="five">5</label>
                </div>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <div id="question">
                        <p>My mentee arrives on time</p>
                    </div>
                </Col>
                <Col md={6}>
                <div className="col-md-8 col-md-pull-4" id="stars">
                    <input type="radio" id="one" name="rate" value="1"/>
                    <label htmlFor="one">1</label>
                    <input type="radio" id="two" name="rate" value="2"/>
                    <label htmlFor="two">2</label>
                    <input type="radio" id="three" name="rate" value="3"/>
                    <label htmlFor="three">3</label>
                    <input type="radio" id="four" name="rate" value="4"/>
                    <label htmlFor="four">4</label>
                    <input type="radio" id="five" name="rate" value="5"/>
                    <label htmlFor="five">5</label>
                </div>
                </Col>
            </Row>
        </Container>
        <Container id="submit">
            <Row>
                <Col>
                    <button className="btn btn-primary">Submit</button>
                </Col>
                <Col>
                    <button className="btn btn-secondary">Cancel</button>
                </Col>
            </Row>
        </Container>
    </Form>
    );
  }
  
  export default Report;