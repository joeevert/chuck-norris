import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';

import { Button, NavLink } from 'reactstrap';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Home}
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
