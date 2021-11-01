import React from 'react'
import { Col, Row, Form, Container,  } from 'react-bootstrap'


// const DEFAULT_USER = {
//     fname: 'Cagla',
//     lname: 'Ist',
//     phone: '14252412222',
//     email: 'cagla@ist.com',
//     occupation: 'Teacher',
//     address: 'The Baytree Centre, 300-302 Brixton Rd',
//     city: 'London',
//     postalCode: 'SW9 6AE',
//     country: 'UK',
//     mentorType: 'Youth Mentor',
//     profileImg: 'https://merodesk.com/wp-content/uploads/2021/05/user-4.png'
//   };

export default function signup() {
    return (
        <Container>
            <h3>Mentor Sign Up Form</h3>
            <hr />
            <Form>

                <Form.Group className="mb-3">
                    <Row>
                        <Col md={6}>
                            <label className="form-label">First Name</label>
                            <input className="form-control" type="text"></input>
                        </Col>
                        <Col md={6}>
                            <label className="form-label">Last Name</label>
                            <input className="form-control" type="text"></input>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <label className="form-label">Birth date</label>
                    <input className="form-control" type="date" placeholder=""></input>
                </Form.Group>

                <Form.Group className="mb-3">
                    <label className="form-label">Address</label>
                    <input className="form-control" type="text" placeholder=""></input>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row>
                        <Col md={3}>
                            <label className="form-label">City</label>
                            <input className="form-control" type="text" placeholder=""></input>
                        </Col>
                        <Col md={3}>
                            <label className="form-label">State/Province</label>
                            <input className="form-control" type="text" placeholder=""></input>
                        </Col>
                        <Col md={3}>
                            <label className="form-label">Country</label>
                            <input className="form-control" type="text" placeholder=""></input>
                        </Col>
                        <Col md={3}>
                            <label className="form-label">Postal Code</label>
                            <input className="form-control" type="text" placeholder=""></input>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row>
                        <Col>
                            <label className="form-label">Phone Number</label>
                            <input className="form-control" type="tel" placeholder=""></input>
                        </Col>
                        <Col>   
                            <label className="form-label">Emergency Contact</label>
                            <input className="form-control" type="tel" placeholder=""></input>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <label className="form-label">Mentor Type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option>Youth Mentor</option>
                        <option>Into School Mentor</option>
                        <option>Women Mentor</option>
                        </select>
                </Form.Group>
                
            </Form>
        </Container>
    )
}
