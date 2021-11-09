import React, { useState } from 'react'
import { Col, Row, Form, Container, Button } from 'react-bootstrap'
import Axios from 'axios';
import { getAccessToken } from '../../auth/Authenticator';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const getSignUpResponse = async() => {
        // To do: Fix post request to return correct response.
        let accessToken = getAccessToken();
        const response = await Axios.post("http://cmpt373-1217-04.cmpt.sfu.ca:8080/auth/signup",{
            "email": email,
            "password": password},{
            headers: {
                "x-access-token": accessToken
            }
        })
        .then(response => {
            return response;
        })
        .catch(err => {
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
                            <Button className="mt-3" variant="primary" onClick={addMentor}>
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