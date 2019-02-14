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
import Bio from '../Bio/Bio';
import Filmography from '../Filmography/Filmography';
import { Button, NavLink } from 'reactstrap';

import './App.css';


class App extends Component {

  // componentDidMount() {
  //   this.props.dispatch({ type: 'FETCH_RANDOM_JOKE' });
  //   this.interval = setInterval(() => {
  //     this.props.dispatch({ type: 'FETCH_RANDOM_JOKE' });
  //   }, 10000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

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
              path="/bio"
              component={Bio}
            />
            <Route
              exact
              path="/filmography"
              component={Filmography}
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
