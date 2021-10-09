import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from './pages/login/Login';
import Sidenav from './components/Sidenav';
// import Dashboard from './pages/dashboard/Dashboard';
// import Messages from './pages/messages/Messages';
// import Questionnaire from './pages/questionnaire/Questionnaire';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Sidenav/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          {/* <Route path="/dashboard" component={Dashboard}/> */}
          {/* <Route path="/messages" component={Messages}/> */}
          {/* <Route path="/questionnaire" component={Questionnaire}/> */}
          {/* <Route path="/settings" component={Settings}/> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
