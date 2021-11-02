import React, { useState } from 'react'
import { Col, Row, Form, Container, Button } from 'react-bootstrap'


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
            <Form className="justify-content-center align-items-center">
                
                <Form.Group className="mb-3">
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <label className="form-label">Email</label>
                            <input className="form-control" type="email" placeholder="example@email.com"></input>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row className="justify-content-center">
                        <Col md={5}>
                            <label className="form-label">Password</label>
                            <input className="form-control" type="email" placeholder="example@email.com"></input>
                        </Col>
                        <Col md={5}>
                            <label className="form-label">Confirm Password</label>
                            <input className="form-control" type="email" placeholder="example@email.com"></input>
                        </Col>
                    </Row>
                </Form.Group>
                
                <Form.Group>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <Button className="mt-3" variant="primary" type="submit">
                                Create Account
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>

            </Form>
        </Container>
    )
}
