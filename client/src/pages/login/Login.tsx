import React, { useState } from 'react';
import logo from '../../assets/logo512.png';
import './Login.css';
import Container from "react-bootstrap/Container";
const Axios=require('axios')
function Login() {

  const [phoneNumber,setLogin]=useState("")
  const [password,setPass]=useState("")

  const addLogin= ()=>{
    Axios.post("http://localhost:3001/login",{
    phoneNumber:phoneNumber,
    password:password
  });
  }
  return (
    <div id="bigBox">
        <div>
          <img src={logo} id="logo" alt="logo"></img>
        </div>
        <div className="inputText">
          <form className="inputTitle" id="inputTitle">Phone Number</form>
          <input type="text"
           id="inputBox" 
           onChange={(event)=>{
             setLogin(event.target.value);
           }}
            />
        </div>

        <div className="inputText">
          <form className="inputTitle" id="inputTitle">Password</form>
          <input type="password" id="inputBox"
           onChange={(event)=>{
           setPass(event.target.value);
           }}
           />
        </div>
        <div className="submitButton">
          <button className="btn btn-primary" id="login" 
          onClick={(addLogin)}>Submit</button>
        </div>
        <div>
          <a href="url" id="signUp">Not a user? Sign up</a>
        </div>
    </div>
  );
}

export default Login;
