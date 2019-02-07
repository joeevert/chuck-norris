import React, { Component } from 'react';
import { connect } from 'react-redux';
import './News.css';

class News extends Component {
  render() {
    return (
      <div>
        <p>news will go here</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(News);
