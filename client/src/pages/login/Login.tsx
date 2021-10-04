import React from 'react';
import './Login.css';

function Login() {
  return (
    <div id="bigBox">
        <div>
          <img src="logo192.png" id="logo"></img>
        </div>
        <div className="inputText">
          <form className="inputTitle" id="inputTitle">Phone Number</form>
          <input type="text" id="inputBox"/>
        </div>

        <div className="inputText">
          <form className="inputTitle" id="inputTitle">Password</form>
          <input type="password" id="inputBox"/>
        </div>
        <div>
          <button className="login" id="login">log in</button>
        </div>
        <div>
          <a href="url" id="signUp">Not a user? Sign up</a>
        </div>
    </div>
  );
}

export default Login;
