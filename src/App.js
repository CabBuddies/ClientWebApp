import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SocialLogin from './components/Login/SocialLogin'

// lazy loading components
const AuthTabs = lazy(() => import('./components/Login/AuthTabs'))
const Mail = lazy(() => import('./components/Mail'))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback = {<div>Loading...</div>}>
          <Switch>
            <Route path = "/dashboard" component = {AuthTabs} />
            <Route path = "/mail"  component = {Mail}/>
            <Route path = "/test" component = {SocialLogin} />
            <Route path = "/">
              <h1>Developing</h1>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
