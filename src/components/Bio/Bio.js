import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bio extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BIO' });
  }

  render() {
    return (
      <div id="bio">
        <h3>THE MAN, THE MYTH, THE LEGEND.</h3>
        <h1>HIS STORIES:</h1>
        <h5>{this.props.reduxState.bioReducer.birthday}</h5>
        <h5>{this.props.reduxState.bioReducer.place_of_birth}</h5>
        <h5>{this.props.reduxState.bioReducer.biography}</h5>
        <h5><a href={this.props.reduxState.bioReducer.homepage}>www.chucknorris.com</a></h5>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Bio);
