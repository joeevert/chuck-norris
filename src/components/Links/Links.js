import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="fill" id="links">
        <p>links section will go here</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Links);
