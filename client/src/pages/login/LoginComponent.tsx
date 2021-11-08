import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../../store/reducers/types'
import { setState } from '../../store/reducers/action';
import { post } from 'jquery';
import { getAccessToken, isAdmin } from '../../auth/Authenticator';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';

const LoginComponent = () => {

  const history = useHistory(); 
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  type loginDataType = {
    email: string;
    roles: string[];
    accessToken: string;
  }

  const getLoginResponse= async() => {
    const response = await Axios.post("http://localhost:8080/auth/login",{
      email: email,
      password:password
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
      alert('Error retrieving data!');
      return err;
    });
    return response;
  }

  const newUser = useSelector((state: User) => state.newUser);
  const dispatch = useDispatch();


  const userLogin= ()=>{
      getLoginResponse().then(response => {
      // let email = response.data.email;
      // let roles = response.data.roles;
      // let accessToken = response.data.accessToken;
      // setEmail(email);
      // setRoles(roles);
      // setAccessToken(accessToken);
      dispatch(setState(response.data.email, response.data.roles, response.data.accessToken, response.data.personID));
      //console.log(store.getState().email);
      // console.log(response.data.email);
      // console.log(response.data.roles);
      // console.log(response.data.accessToken);

      localStorage.setItem('email',response.data.email);
      localStorage.setItem('accessToken',response.data.accessToken);
      localStorage.setItem('personID',response.data.personID);

      for(var roleIndex in response.data.roles){
        if(response.data.roles[roleIndex] === "admin")
          localStorage.setItem("admin", "admin");
        else if (response.data.roles[roleIndex] === "user")
          localStorage.setItem("user", "user");
      }

      history.push("/dashboard");

      console.log(isAdmin());
    })
  }

  return (    
    <div className="container ">
      <div className="row border-0 d-flex align-items-center ">
        <div className="col mx-auto ">            
          <img src={logo}  alt="logo" width="auto" height="175" className="image mt-3"/>
          <h4 className="text-center pt-3">Sign in</h4>
          <form >
            <div className="form-group mb-3">
              <label>Email</label>
              <input 
                  type="email" 
                  className="form-control"
                  onChange={(event)=>{
                    setEmail(event.target.value);
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
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="btn btn-primary btn-block" id="login" 
                  onClick={(userLogin)}
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

