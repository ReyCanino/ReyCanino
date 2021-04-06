import './App.css';
import React, { Component } from 'react';
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservations from './pages/Reservations';
import Manage from './pages/Manage';
import NotFound from './pages/NotFound';
import Exito from './pages/Exito';
import Fallo from './pages/Fallo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <PrivateRoute path="/client-reservations" component={Reservations} exact />
          <PrivateRoute path="/manage-reservations" component={Manage} exact />
          <Route path="/exito" component={Exito} />
          <Route path="/fallo" component={Fallo} />
          <Route component={NotFound} />
        </Switch>
      </Router >
    );
  }
}

export default App;
