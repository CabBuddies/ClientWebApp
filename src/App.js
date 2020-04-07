import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

// lazy loading components
const AuthTabs = lazy(() => import('./components/login/AuthTabs'))
const AuthModal = lazy(() => import('./components/login/AuthModal'))
// const Home = lazy(() => import('./components/home/Home'))
const Mail = lazy(() => import('./components/Mail'))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback = {<div>Loading...</div>}>
          <Switch>
            <Route path = "/dashboard" component = {AuthTabs} />
            <Route path = "/mail"  component = {Mail}/>
            <Route path = "/" component={AuthModal}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
