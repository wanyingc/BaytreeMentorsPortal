import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from './pages/login/Login';
import Sidenav from './components/Sidenav';
import Dashboard from './pages/dashboard/Dashboard';
import Messages from './pages/messages/Messages';
import Report from './pages/report/Report';
import QuestionnaireForm from './pages/questionnaire/Questionnaire-form';
import Profile from './pages/profile/Profile';
import DashboardVolunteer from './pages/dashboard_volunteer/DashboardVolunteer';
import TimeCard from './pages/timecard/TimeCard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Sidenav/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/dashboard_v" component={DashboardVolunteer}/>
          <Route exact path="/timecard" component={TimeCard}/>
          <Route path="/messages" component={Messages}/>
          {/* <Route path="/report" component={Report}/> */}
          <Route path="/questionnaire" component={QuestionnaireForm}/>
          {/* <Route path="/settings" component={Settings}/> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
