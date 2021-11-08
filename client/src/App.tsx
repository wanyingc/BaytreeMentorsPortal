import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { useState} from "react";
import store from "./store/reducers/store";
import Login from './pages/login/Login';
import Sidenav from './components/Sidenav';
import Dashboard from './pages/dashboard/Dashboard';
import Messages from './pages/messages/Messages';
import Report from './pages/report/Report';
import QuestionnaireForm from './pages/questionnaire/Questionnaire-form';
import Profile from './pages/profile/Profile';
import CreateSession from './pages/create-session/CreateSession';
import SignUp from './pages/signup/SignUp';
import ProtectedRoute from './pages/login/ProtectedRoute';
import { isAdmin, isUser } from './auth/Authenticator';
import MentorsList from './pages/mentors-list/MentorsList';

import DashboardAdmin from './pages/dashboard/DashboardAdmin';
import DashboardVolunteer from './pages/dashboard/DashboardVolunteer';

// cite: https://stackoverflow.com/questions/47281850/how-to-hide-navbar-in-login-page-in-react-router
const LoginRoute = () => (
  <div className="">
    <Route exact path="/" component={Login}/>
    <Route exact path="/login" component={Login}/>
  </div>
)

const MainRoutes = () => (
  <div className="container">
    <Sidenav/> 
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/create-session" component={CreateSession}/>
    {/* <Route path="/dashboard" component={Dashboard}/> */}
    <ProtectedRoute isUser={isUser()} path="/dashboard" component={Dashboard} />
    <Route path="/messages" component={Messages}/>
    <Route exact path ="/signup" component={SignUp}/>
    {/* <Route path="/report" component={Report}/> */}
    <Route path="/questionnaire" component={QuestionnaireForm}/>
    {/* <Route path="/settings" component={Settings}/> */}
    <Route path="/mentors-list" component={MentorsList}/>
  </div>
)


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginRoute}/>
          <Route exact path="/login" component={LoginRoute}/>
          <Route component={MainRoutes}/>      
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
