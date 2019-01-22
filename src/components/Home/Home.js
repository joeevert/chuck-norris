import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, NavLink } from 'reactstrap';
import './Home.css';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_RANDOM_JOKE' });
  }

  randomJoke = () => {
    this.props.dispatch({ type: 'FETCH_RANDOM_JOKE' });
  }

  render() {
    return (
      <section className="App">
        <div className="imageDiv">
          <img src='/images/chuck-norris.jpg' alt="Chuck Norris" className="img-fluid" />
        </div>
        <div className="jokeDiv">
          <h4>{this.props.reduxState.randomJokeReducer.joke}</h4>
        </div>
          <Button outline color="secondary" onClick={this.randomJoke}>Click for another joke</Button>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Home);
