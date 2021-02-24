import './App.css';
import React, { Component } from 'react';
import Listado from './pages/Listado';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/listado" component={Listado} exact />
        </Switch>
      </Router >
    );
  }
}

export default App;
