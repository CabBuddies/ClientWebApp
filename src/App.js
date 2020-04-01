import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Mailer from './components/Mailer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/login">
            <LoginForm />
          </Route>
          <Route path = "/registration">
            <RegistrationForm />
          </Route>
          <Route path = "/mail">
            <Mailer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
