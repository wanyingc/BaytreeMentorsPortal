import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const LoginComponent = () => {

  const [phoneNumber,setLogin] = useState("");
  const [password,setPass] = useState("");

  const addLogin= ()=>{
    Axios.post("http://localhost:3001/login",{
      phoneNumber:phoneNumber,
      password:password
    });
  }
  
  return (    
    <div className="container ">
      <div className="row border-0 d-flex align-items-center ">
        <div className="col mx-auto ">            
          <img src={logo}  alt="logo" width="auto" height="175" className="image mt-3"/>
          <h4 className="text-center pt-3">Sign in</h4>
          <form >
            <div className="form-group mb-3">
              <label>Phone number or Email</label>
              <input 
                  type="email" 
                  className="form-control"
                  onChange={(event)=>{
                    setLogin(event.target.value);
                  }}
                placeholder="Enter email"
              />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input 
                  className="form-control"
                  placeholder="Enter password"
                  type="password"
                  onChange={(event)=>{
                    setPass(event.target.value);
                  }}
                />
              </div>
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="btn btn-primary btn-block" id="login" 
                  onClick={(addLogin)}
                >
                  Sign in
                </button>
              </Link>                  
          </form>          
          <div className="">
            <p className="text-center">
              <a href="/signup" id="signUp">Forgot password</a>
            </p>
          </div>
        </div>
      </div>
    </div>     
  );
}
export default LoginComponent;

