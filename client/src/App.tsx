import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './pages/login/Login';
// import Dashboard from './pages/dashboard/Dashboard';
// import Messages from './pages/messages/Messages';
// import Questionnaire from './pages/questionnaire/Questionnaire';
// import Settings from './pages/settings/Settings';
import TimeCard from './pages/timecard/TimeCard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        {/* <Route path="/dashboard" component={Dashboard}/> */}
        {/* <Route path="/messages" component={Messages}/> */}
        {/* <Route path="/questionnaire" component={Questionnaire}/> */}
        {/* <Route path="/settings" component={Settings}/> */}
        <Route path="/timecard" component={TimeCard}/>
      </Switch>
    </Router>
  );
}

export default App;
