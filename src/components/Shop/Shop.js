import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Shop.css';

class Shop extends Component {
  render() {
    return (
      <section className="shopSection">
        <p>Footer will go here</p>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Shop);
