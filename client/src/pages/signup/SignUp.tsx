import React, { useState } from 'react'
import { Col, Row, Form, Container, Button, Spinner } from 'react-bootstrap'
import Axios from 'axios';
import { getAccessToken } from '../../auth/Authenticator';
import { BASE_API_URL } from '../../config/config';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signupResponse, setSignupResponse] = useState<any>(undefined);
    const [submit, setSubmit] = useState(false);

    const getSignUpResponse = async() => {
        let accessToken = getAccessToken();
        const response = await Axios.post(`${BASE_API_URL}/auth/signup`,{
            "email": email,
            "password": password},{
            headers: {
                "x-access-token": accessToken
            }
        })
        .then(response => {
            return response;
        })
        .catch((err) => {
            alert(err.response.data.error);
            return err;
        });
        return response;    
    }


    // https://stackoverflow.com/questions/51143800/how-to-set-match-password-in-react-js/51153497
    const addMentor = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        }
        else {
            setSubmit(true);
            getSignUpResponse()
                .then(response => {
                    setSignupResponse(response.data);
                    setSubmit(false);
                });
        }
    }

    return (
        <Container>
            {
                !signupResponse && submit &&
                <div className = "loading">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
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