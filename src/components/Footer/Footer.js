import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <p>Footer will go here</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Footer);
