import React, { useState } from 'react';
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

const ForgotComponent = () => {

  const history = useHistory(); 
  const [email,setEmail] = useState("");

  const getLinkResponse= async() => {
    const response = await Axios.post(`${BASE_API_URL}/auth/login`,{
      email: email,
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

  const sendLink= ()=>{
  //   getLinkResponse().then(response => {

  // })
}


  return (    
    <div className="container ">
      <div className="row border-0 d-flex align-items-center ">
        <div className="col mx-auto ">            
          <img src={logo}  alt="logo" width="auto" height="175" className="image mt-3"/>
          <h4 className="text-center pt-3">Forgot Password</h4>
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
              <Link to="/reset-password">
                <button
                  type="submit"
                  className="sign-button btn btn-primary btn-block" id="login" 
                  onClick={(sendLink)}
                >
                  Send Link
                </button>
              </Link>                  
          </form>          
        </div>
      </div>
    </div>     
  );
}
export default ForgotComponent;

