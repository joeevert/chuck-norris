import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Shop.css';

class Shop extends Component {
  render() {
    return (
      <section className="shopSection">
        <div>
          <h1>SHOP</h1>
          <h3>STORE TEMORARILY CLOSED. COMING BACK SOON!</h3>
        </div>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Shop);
