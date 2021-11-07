import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
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
import TimeCard from './pages/timecard/TimeCard';
import ProtectedRoute from './pages/login/ProtectedRoute';
import { isAdmin, isUser } from './auth/Authenticator';
import MentorsList from './pages/mentors-list/MentorsList';

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
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/timecard" component={TimeCard}/>
    <Route path="/messages" component={Messages}/>
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
          <ProtectedRoute isUser={true} path="/login" component={LoginRoute} />
          {/* <Route exact path="/login" component={LoginRoute}/> */}
          <ProtectedRoute isUser={isUser()} path="/sidenav" component={Sidenav} />
          <ProtectedRoute isUser={isUser()} path="/dashboard" component={Dashboard} />
          <ProtectedRoute isUser={isUser()} path="/profile" component={Profile} />
          <ProtectedRoute isUser={isUser()} path="/timecard" component={TimeCard} />
          <ProtectedRoute isUser={isUser()} path="/messages" component={Messages} />
          <ProtectedRoute isUser={isUser()} path="/quesionnaire" component={QuestionnaireForm} />
          {/* <Route component={MainRoutes}/>           */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
