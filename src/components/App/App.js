import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import About from '../About/About';

import { Button, NavLink } from 'reactstrap';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <NavBar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/about"
              component={About}
            />
          </Switch>
        </section>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(App);
