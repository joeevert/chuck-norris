import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';

class App extends Component {

  componentDidMount() {
    console.log('comp did mount');
    
    this.props.dispatch({ type: 'FETCH_RANDOM_JOKE' });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {JSON.stringify(this.props.reduxState.randomJokeReducer.value)}
          {JSON.stringify(this.props.reduxState.randomJokeReducer.value)}

        </header>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(App);
