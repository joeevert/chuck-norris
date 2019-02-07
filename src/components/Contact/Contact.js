import React, { Component } from 'react';
import { connect } from 'react-redux';
import './News.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <p>Contact will go here</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Contact);
