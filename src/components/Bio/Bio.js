import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, NavLink } from 'reactstrap';

class Bio extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BIO' });
  }

  render() {
    return (
      <section>
        <h3>{this.props.reduxState.bioReducer.name}</h3>
        <h5>{this.props.reduxState.bioReducer.birthday}</h5>
        <h5>{this.props.reduxState.bioReducer.place_of_birth}</h5>
        <h5>{this.props.reduxState.bioReducer.biography}</h5>
        <h5><a href={this.props.reduxState.bioReducer.homepage}>www.chucknorris.com</a></h5>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Bio);
