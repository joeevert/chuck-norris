import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Container, Row, Col } from 'reactstrap';


import './App.css';

import NavBar from '../NavBar/NavBar';
import News from '../News/News';
import Shop from '../Shop/Shop';
import Links from '../Links/Links';
import Filmography from '../Filmography/Filmography';
import Bio from '../Bio/Bio';
import Contact from '../Contact/Contact';
import Jokes from '../Jokes/Jokes';
import Footer from '../Footer/Footer';

class App extends Component {

  render() {
    return (
      // <Router>
      <main className="App">
        <NavBar />
        <News />
        <Shop />
        <Links />
        <Filmography />
        <Bio />
        <Contact />
        <Footer />
        <Jokes />
        {/* <div className="imageDiv">
          <img src='/images/chuck-norris.jpg' alt="Chuck Norris" className="chuck" />
        </div> */}
      </main>
      // </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(App);
