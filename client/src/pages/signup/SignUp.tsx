// https://stackoverflow.com/questions/51143800/how-to-set-match-password-in-react-js/51153497
// https://stackoverflow.com/questions/16377163/password-uppercase-characters-javascript

import { useEffect, useState } from 'react'
import { Col, Row, Form, Container, Button, Spinner } from 'react-bootstrap'
import Axios from 'axios';
import { getAccessToken } from '../../auth/Authenticator';
import { BASE_API_URL } from '../../config/config';
import './SignUp.css';

const Signup = () => {
    // Alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    // Form hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signupResponse, setSignupResponse] = useState<any>(undefined);
    const [submit, setSubmit] = useState(false);

    // Validation messages hooks
    const [emailValMsg, setEmailValMsg] = useState("");
    const [confirmPassValMsg, setConfirmPassValMsg] = useState("");
    
    // Validation boolean hooks
    const [lowerValidate, setlowerValidate] = useState(false);
    const [upperValidate, setUpperValidate] = useState(false);
    const [lenValidate, setLenValidate] = useState(false);
    const [numValidate, setNumValidate] = useState(false);
    const [confirmPwValidate, setConfirmPwValidate] = useState(false);

    // Password validation message parts
    const passwordValMsgLength = "8 or more characters";
    const passwordValMsgNum = "numbers";
    const passwordValMsgUpper = "uppercase";
    const passwordValMsgLower = "lowercase letters";    

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
            setShowAlert(true); // this and the next line do the same thing in 2 forms, 
            setAlertMsg("Signup successful!");
            window.location.reload();
            
        })
        .catch((err) => {
            setSubmit(false);
            setShowAlert(true); // this and the next line do the same thing in 2 forms, 
            setAlertMsg(err.response.data.error);
            setEmailValMsg("Please provide correct email address");
        });   
    }

    // Password Validation begins ----------------------------------------------------------
    // password validation functions begin -------
    const validateLowercase = () => {
        if (password.search(/[a-z]/) >= 0){
            setlowerValidate(true);
        }
        else {
            setlowerValidate(false);           
        }
    }
    const validateUppercase = () => {
        if (password.search(/[A-Z]/) >= 0){
            setUpperValidate(true);
        }
        else {
            setUpperValidate(false);           
        }
    }
    const validateNum = () => {
        if (password.search(/[0-9]/) >= 0){
            setNumValidate(true);
        }
        else {
            setNumValidate(false);           
        }
    }
    const validateLen = () => {
        if (password.length >= 8){
            setLenValidate(true);
        }
        else {
            setLenValidate(false);           
        }
    }
    const validateConfirmPassword = () => {
        if(password.localeCompare(confirmPassword) === 0){
            setConfirmPwValidate(true);            
        }
        else {
            setConfirmPwValidate(false);
        }
    }
    // password validation functions end ---------

    const passwordValidate = (): boolean => { // checks for all the validations
        if(lenValidate && numValidate && lowerValidate && upperValidate && confirmPwValidate){
            return true;
        }
        else {
            return false;
        }        
    }

    useEffect(() => { // if the values of "password" or "confirmPassword" change, this block will call all types of password validation functions
        validateLowercase();
        validateLen();
        validateNum();
        validateUppercase();
        validateConfirmPassword();
    }, [password, confirmPassword])
    
    // Password Validation ends ------------------------------------------------------------

    const addMentor = () => {
        if (passwordValidate() && email.length > 0) { // email validation is not that important for now, length check is more of a placeholder for future
            setSubmit(true);
            getSignUpResponse();
        }
        else {            
            if(email.length === 0){ // email empty error message
                setEmailValMsg("Please provide correct email address");
            }            
            if(!confirmPwValidate){ // if confirmPassword doesn't match password
                setConfirmPassValMsg("Passwords do not match");
            }
        }
    }

    return (
        <>
            <div className="container-fluid header-image-signup">
                <div className="container p-2">
                    <div className="row justify-content-center mt-5" style={{backgroundColor:'#FF1E89', width:'fit-content'}}>
                        <h5 className="page-title">Sign Up Mentors</h5>
                    </div>    
                </div>
            </div>
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
                    <Col md={9}>
                        {   showAlert ?
                            <div className={`alert ${signupResponse ? 'alert-success' : 'alert-danger'}  alert-dismissible fade show`} role="alert">
                                {alertMsg}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setShowAlert(false)}></button>
                            </div>
                            : <></>
                        }
                        <Form>
                            
                            <Form.Group className="mb-3">
                                <Row className="justify-content-center">
                                    <Col md={12}>
                                        <label className="form-label">Email</label>                                    
                                        <input className="form-control" type="email" placeholder="example@email.com" 
                                            onChange={(event)=>{
                                                    setEmail(event.target.value);
                                                    setConfirmPassValMsg("");
                                                }}>                
                                        </input>                                    
                                        <div className="warnText text-danger">{emailValMsg}</div>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group>
                                <Row className="justify-content-center">
                                    <Col md={6} className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input className="form-control" type="password" placeholder="" 
                                            autoComplete="new-password"
                                            onChange={(event)=>{
                                                    setPassword(event.target.value);
                                                    setConfirmPassValMsg("");
                                                }}></input>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input className="form-control" 
                                            type="password" placeholder="" 
                                            onChange={(event)=>{
                                                    setConfirmPassword(event.target.value);
                                                    setConfirmPassValMsg("");
                                                }}></input>
                                    </Col>
                                </Row>
                                <div className="warnTextGreen">
                                    <span className={`${lenValidate ? '' : 'text-danger'}`}>{passwordValMsgLength}</span>, including
                                    <span className={`${numValidate ? '' : 'text-danger'}`}> {passwordValMsgNum}</span>,
                                    <span className={`${upperValidate ? '' : 'text-danger'}`}> {passwordValMsgUpper}</span> and
                                    <span className={`${lowerValidate ? '' : 'text-danger'}`}> {passwordValMsgLower}</span>
                                </div>
                                <div className="warnText text-danger">{confirmPassValMsg}</div>
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
        </>
    
    )
}
export default Signup;