import React from 'react';
import logo from '../../assets/logo512.png';
import './Login.css';
import Container from "react-bootstrap/Container";

function Login() {
  return (
    <div id="bigBox">
          <img src={logo}  alt="logo" width="100" height="100" className="image"></img>
        <div className="inputText">
          <form className="inputTitle" id="inputTitle">Phone Number</form>
          <input type="text" id="inputBox"/>
        </div>

        <div className="inputText">
          <form className="inputTitle" id="inputTitle">Password</form>
          <input type="password" id="inputBox"/>
        </div>
        <div className="submitButton">
          <button className="btn btn-primary" id="login">Submit</button>
        </div>
        <div className="test">
          <a href="url" id="signUp">Not a user? Sign up</a>
        </div>
    </div>
  );
}

export default Login;
