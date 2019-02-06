import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';

class Home extends Component {

  render() {
    return (
      <section className="Home">
        <div className="imageDiv">
          <img src='/images/chuck-norris.jpg' alt="Chuck Norris" className="chuck" />
        </div>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Home);
