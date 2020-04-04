import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

// lazy loading components
const LoginForm = lazy(() => import('./components/LoginForm'))
const RegistrationForm = lazy(() => import('./components/RegistrationForm'))
const Mail = lazy(() => import('./components/Mail'))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback = {<div>Loading...</div>}>
          <Switch>
            <Route path = "/login" component = {LoginForm} />
            <Route path = "/registration" component = {RegistrationForm}/>
            <Route path = "/mail"  component = {Mail}/>
            <Route path = "/">
              <div>
                <h1>
                  You're in the Home page.
                </h1>
                <p>Currently these pages are in development</p>
                <ul>
                  <li>Log in</li>
                  <li>Sign up</li>
                </ul>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
