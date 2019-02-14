import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Jokes.css';

class Jokes extends Component {

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
        <footer className="jokeContainer">
        {this.props.reduxState.randomJokeReducer.joke && 
          <p className="joke">{this.props.reduxState.randomJokeReducer.joke.toUpperCase()}</p>}
        </footer>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Jokes);
