import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/404'
import AppBar from './components/appbar/AppBar'


function App() {

  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
