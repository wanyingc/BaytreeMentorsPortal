import React, { useState } from 'react'
import { Col, Row, Form, Container, Button } from 'react-bootstrap'
import Axios from 'axios';


export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // https://stackoverflow.com/questions/51143800/how-to-set-match-password-in-react-js/51153497
    const addMentor=async()=>{
        if(password !== confirmPassword){
            alert("Passwords do not match!");
        }else{
            let response = await Axios.post("http://localhost:8080/auth/signup",{
                "email": email,
                "password": password},{
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJ0LmNvbSIsImlhdCI6MTYzNTg0NTk4NSwiZXhwIjoxNjM1ODQ5NTg1fQ.zKfIIg4OrmESVHcbmaSNY7gLLdEWLLPGLbyTSHBnABc"
                }
            });
            console.log(response.data);
        }
      }

    return (
        <Container>

            <h3>Mentor Sign Up Form</h3>
            <hr />

            <Form className="justify-content-center align-items-center">
                
                <Form.Group className="mb-3">
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <label className="form-label">Email</label>
                            <input className="form-control" type="email" placeholder="example@email.com" onChange={(event)=>{setEmail(event.target.value);}}></input>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row className="justify-content-center">
                        <Col md={5}>
                            <label className="form-label">Password</label>
                            <input className="form-control" type="password" placeholder="" onChange={(event)=>{setPassword(event.target.value);}}></input>
                        </Col>
                        <Col md={5}>
                            <label className="form-label">Confirm Password</label>
                            <input className="form-control" type="password" placeholder="" onChange={(event)=>{setConfirmPassword(event.target.value);}}></input>
                        </Col>
                    </Row>
                </Form.Group>
                
                <Form.Group>
                    <Row className="justify-content-center">
                        <Col md={10}>
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
