import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'reactstrap';
import './Footer.css';

class Footer extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_RANDOM_JOKE' });
    this.interval = setInterval(() => {
      this.props.dispatch({ type: 'FETCH_RANDOM_JOKE' });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <section>
        <div className="jokeContainer">
        {this.props.reduxState.randomJokeReducer.joke && 
          <h6 className="joke">{this.props.reduxState.randomJokeReducer.joke.toUpperCase()}</h6>}
        </div>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Footer);
