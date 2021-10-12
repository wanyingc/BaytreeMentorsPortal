import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from './pages/login/Login';
import Sidenav from './components/Sidenav';
import Dashboard from './pages/dashboard/Dashboard';
// import Messages from './pages/messages/Messages';
// import Dashboard from './pages/dashboard/Dashboard';
import Messages from './pages/messages/Messages';
import Report from './pages/report/Report';
// import Questionnaire from './pages/questionnaire/Questionnaire';
import QuestionnaireForm from './pages/questionnaire/Questionnaire-form';
import Profile from './pages/profile/Profile';
import Dashboard_Volunteer from './pages/dashboard_volunteer/Dashboard_Volunteer';
import TimeCard from './pages/timecard/TimeCard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Sidenav/> */}
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/dashboard_v" component={Dashboard_Volunteer}/>
          {/* <Route path="/messages" component={Messages}/> */}
          <Route exact path="/timecard" component={TimeCard}/>

          {/* <Route path="/dashboard" component={Dashboard}/> */}
          <Route path="/messages" component={Messages}/>
          <Route path="/report" component={Report}/>
          {/* <Route path="/questionnaire" component={Questionnaire}/> */}
          {/* <Route path="/settings" component={Settings}/> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
