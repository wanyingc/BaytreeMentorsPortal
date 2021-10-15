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
import DashboardVolunteer from './pages/dashboard/DashboardVolunteer';
import TimeCard from './pages/timecard/TimeCard';

// cite: https://stackoverflow.com/questions/47281850/how-to-hide-navbar-in-login-page-in-react-router
const LoginRoute = () => (
  <div className="container">
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
