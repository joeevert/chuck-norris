import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
