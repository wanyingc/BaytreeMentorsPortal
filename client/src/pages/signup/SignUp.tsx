// https://stackoverflow.com/questions/51143800/how-to-set-match-password-in-react-js/51153497
// https://stackoverflow.com/questions/16377163/password-uppercase-characters-javascript

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

    // Validation messages hooks
    const [passwordValMsg, setPasswordValMsg] = useState("");
    const [confirmPassValMsg, setConfirmPassValMsg] = useState("");
    const [emailValMsg, setEmailValMsg] = useState("")

    const getSignUpResponse = () => {
        let accessToken = getAccessToken();
        Axios.post(`${BASE_API_URL}/auth/signup`,
            {
                "email": email,
                "password": password
            },
            {
                headers: {
                "x-access-token": accessToken
            }
        })
        .then(response => {
            setSignupResponse(response.data);
            setSubmit(false);
            alert("Signup successful!");
        })
        .catch((err) => {
            setSubmit(false);
            alert(err.response.data.error);
        });   
    }

    const passwordValidate = (): boolean => {
        var validate: boolean = true;
        if (password.length < 8) { // new passwords will need to be of length 8 at least
            validate = false;
            setPasswordValMsg("Password length should be at least 8!");
        }
        else if (password.search(/[a-z]/) < 0){
            validate = false;
            setPasswordValMsg("Password needs at least 1 lowercase letter!");            
        }
        else if (password.search(/[A-Z]/) < 0){
            validate = false;
            setPasswordValMsg("Password needs at least 1 uppercase letter!");            
        }
        else if (password.search(/[0-9]/) < 0){
            validate = false;
            setPasswordValMsg("Password needs at least 1 number!");
        }
        else if ((password.length !== confirmPassword.length) || (password !== confirmPassword)){
            validate = false;
            setPasswordValMsg("");
            setConfirmPassValMsg("Passwords do not match!");
        }
        return validate;
    }

    const addMentor = () => {
        if (passwordValidate()) {
            setSubmit(true);
            getSignUpResponse();
        }
    }

    return (
        <Container>
            <Row className="justify-content-center align-items-center mt-5">
                {
                    !signupResponse && submit &&
                    <div className = "loading">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                }
                <Col md={8}>
                    <Form>
                        
                        <Form.Group className="mb-3">
                            <Row className="justify-content-center">
                                <Col md={12}>
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="email" placeholder="example@email.com" 
                                        onChange={(event)=>{
                                                setEmail(event.target.value);
                                                setPasswordValMsg("");
                                                setConfirmPassValMsg("");
                                            }}>                
                                    </input>
                                    <div className="text-danger">{emailValMsg}</div>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input className="form-control" type="password" placeholder="" 
                                        onChange={(event)=>{
                                                setPassword(event.target.value);
                                                setConfirmPassValMsg("");
                                            }}></input>
                                    <div className="text-danger">{passwordValMsg}</div>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input className="form-control" type="password" placeholder="" onChange={(event)=>{setConfirmPassword(event.target.value);}}></input>
                                    <div className="text-danger">{confirmPassValMsg}</div>
                                </Col>
                            </Row>
                        </Form.Group>
                        
                        <Form.Group>
                            <Row className="justify-content-center">
                                <Col md={12}>
                                    <Button className="mt-3 mb-3" variant="primary" onClick={addMentor}>
                                        Create Account
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Signup;