import './App.css';
import React, { Component } from 'react';
import Listado from './components/Listado';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/listado" component={Listado} exact />
        </Switch>
      </Router >
    );
  }
}

export default App;
