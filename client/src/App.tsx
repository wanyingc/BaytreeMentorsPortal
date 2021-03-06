import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { useState} from "react";
import store from "./store";
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
import session from './pages/sessions/Session';
import QuestionnaireAdmin from './pages/questionnaire/QuestionnaireAdmin'
import QuestionList from './pages/questionnaire/QuestionList'
import Records from './pages/historicRecords/HistoricRecords';
import Forgot from './pages/forgot-password/ForgotPassword';
import Reset from './pages/reset-password/ResetPassword';
import DashboardAdmin from './pages/dashboard/DashboardAdmin';
import DashboardVolunteer from './pages/dashboard/DashboardVolunteer';
import Resources from './pages/resources/Resources';
import AdminRecords from './pages/historicRecords/HistoricRecordsAdmin';
import Goals from './pages/goals/Goals';

import MentorQuestionnaires from './pages/questionnaire/Mentor-Questionnaires';
import NewPost from './pages/new-post/NewPost'


// cite: https://stackoverflow.com/questions/47281850/how-to-hide-navbar-in-login-page-in-react-router
const LoginRoute = () => (
  <div>
    <Route exact path="/" component={Login}/>
    <Route exact path="/login" component={Login}/>
  </div>
)

const MainRoutes = () => (
  <div className="">
    <Sidenav/> 
    <Route exact path="/profile" component={Profile}/>

    {/* <Route exact path="/dashboard" component={Dashboard}/> */}

    <Route exact path="/goals" component={Goals}/>
    <Route exact path="/create-session" component={CreateSession}/>
    <ProtectedRoute isUser={isUser()} path="/dashboard" component={Dashboard} />
    <Route exact path="/messages" component={Messages}/>
    <Route exact path ="/signup" component={SignUp}/>
    {/* <Route path="/sessions" component={sessions}/> */}
    <Route path="/session/:personID/:SessionID" component={session}/>
    {/* <ProtectedRoute isUser={isAdmin()} path="/signup" component={SignUp} /> */}
    {/* <Route path="/report" component={Report}/> */}
    <Route exact path="/questionnaire" component={MentorQuestionnaires}/>
    <Route exact path="/questionnaire-form" component={QuestionnaireForm}/>
    {/* <Route path="/settings" component={Settings}/> */}
    <Route exact path="/resources" component={Resources}/>
    <Route exact path="/mentors-list" component={MentorsList}/>
    <Route exact path="/records" component={Records}/>
    <Route exact path="/records/:personID" component={AdminRecords}/>
    <Route exact path="/questionnaires" component={QuestionnaireAdmin}/>
    <Route exact path="/questions/:questionnaireID" component={QuestionList}/>
    <Route exact path="/new-post" component={NewPost}/>

  </div>
)

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginRoute}/>
          <Route exact path="/login" component={LoginRoute}/>
          <Route exact path="/forgot-password" component={Forgot}/>
          <Route exact path="/reset-password" component={Reset}/>
          <Route component={MainRoutes}/>      
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
