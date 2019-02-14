import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <p>Contact section will be a popup</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Contact);
