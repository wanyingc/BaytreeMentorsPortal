import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../../store/reducers/types'
import { setState } from '../../store/reducers/action';
import { post } from 'jquery';
import { getAccessToken, isAdmin } from '../../auth/Authenticator';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import {BASE_API_URL} from '../../config/config'; 
import { Col, Row, Form, Container, Button, Spinner } from 'react-bootstrap'

const ResetComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPassValMsg, setConfirmPassValMsg] = useState("");
  const [lowerValidate, setlowerValidate] = useState(false);
  const [upperValidate, setUpperValidate] = useState(false);
  const [lenValidate, setLenValidate] = useState(false);
  const [numValidate, setNumValidate] = useState(false);
  const [confirmPwValidate, setConfirmPwValidate] = useState(false);
  const [forget_password_token,setToken]=useState("")
  const passwordValMsgLength = "8 or more characters";
  const passwordValMsgNum = "numbers";
  const passwordValMsgUpper = "uppercase";
  const passwordValMsgLower = "lowercase letters";    
  const ResetLink = async () => {
      const response = await Axios.post(`${BASE_API_URL}/reset-password`,{  
        forget_password_token: forget_password_token,
        password:password,
      })
      .then(response => {
        alert('Password Successfully Changed');
        return response;
      })
      .catch(err => {
        alert('Token Expired! Please try again');
        return err;
      });
      return response;
  }
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
  const passwordValidate = (): boolean => { 
      if(lenValidate && numValidate && lowerValidate && upperValidate && confirmPwValidate){
          return true;
      }
      else {
          return false;
      }        
  }
  useEffect(() => {
      validateLowercase();
      validateLen();
      validateNum();
      validateUppercase();
      validateConfirmPassword();
  }, [password, confirmPassword])
  const Resetpswd = () => {        
          if(!confirmPwValidate){ 
              setConfirmPassValMsg("Passwords do not match");
          }
      }
  return (
    <Container>
        <Row className="justify-content-center align-items-center mt-5">
        <img src={logo}  alt="logo" width="auto" height="175" className="image mt-3"/>  
            <Col md={9}>
                <Form>
                    <Form.Group className="mb-3">
                    <Row className="justify-content-center">
                            <Col md={6} className="mb-3 mt-5">
                                <label className="form-label">Code</label>
                                <input className="form-control" type="text" placeholder="Enter the code" 
                                    onChange={(event)=>{
                                            setToken(event.target.value);
                                        }}></input>
                            </Col>
                            </Row>
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
                            <Link to="/login">
                                <Button className="mt-3 mb-3" variant="primary" onClick={ResetLink}>
                                    Reset
                                </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
)
}
export default ResetComponent;