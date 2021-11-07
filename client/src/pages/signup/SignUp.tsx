import React, { useState } from 'react'
import { Col, Row, Form, Container, Button } from 'react-bootstrap'
import Axios from 'axios';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const getSignUpResponse = async() => {
        // To do: Fix post request to return correct response.
        const response = await Axios.post("http://localhost:8080/auth/signup",{
            "email": email,
            "password": password},{
            headers: {
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJ0LmNvbSIsImlhdCI6MTYzNjE3NzU5OSwiZXhwIjoxNjM2MTgxMTk5fQ.gVd-akTRi0x3wYhIxocEXbDVzyOw1M8hk7EuIKwaLEI"
            }
        })
        .then(response => {
            // console.log("success");
            return response;
        })
        .catch(err => {
            // console.log("Error!!!");
            // alert("Error.")
            return err;
        });
        console.log("success!");
        return response;    
    }


    // https://stackoverflow.com/questions/51143800/how-to-set-match-password-in-react-js/51153497
    const addMentor = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        }
        else {
            getSignUpResponse()
                .then(response => {
                    console.log(response.data);
                });
        }
    }

    return (
        <Container>

            <h3>Mentor Sign Up Form</h3>
            <hr />

            <Form className="justify-content-center align-items-center">
                
                <Form.Group className="mb-3">
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <label className="form-label">Email</label>
                            <input className="form-control" type="email" placeholder="example@email.com" onChange={(event)=>{setEmail(event.target.value);}}></input>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <label className="form-label">Password</label>
                            <input className="form-control" type="password" placeholder="" onChange={(event)=>{setPassword(event.target.value);}}></input>
                        </Col>
                        <Col md={6}>
                            <label className="form-label">Confirm Password</label>
                            <input className="form-control" type="password" placeholder="" onChange={(event)=>{setConfirmPassword(event.target.value);}}></input>
                        </Col>
                    </Row>
                </Form.Group>
                
                <Form.Group>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <Button className="mt-3" type="submit" variant="primary" onClick={addMentor}>
                                Create Account
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>

            </Form>

        </Container>
    )
}
export default Signup;