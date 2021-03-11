import './App.css';
import React, { Component } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservations from './pages/Reservations';
import AgendaAdmin from './pages/AgendaAdmin';
import Manage from './pages/Manage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/client-reservations" component={Reservations} exact />
          <Route path="/manage-reservations" component={Manage} exact />
		  <Route path="/agenda-administrador" component={AgendaAdmin} exact />
        </Switch>
      </Router >
    );
  }
}

export default App;
