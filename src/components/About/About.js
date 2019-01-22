import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, NavLink } from 'reactstrap';

class About extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BIO' });
  }

  render() {
    return (
      <section className="App">
        <div className="imageDiv">
          <img src='/images/chuck-norris.jpg' alt="Chuck Norris" className="img-fluid" />
        </div>
        {/* {JSON.stringify(this.props.reduxState.bioReducer)} */}
        <h5>{this.props.reduxState.bioReducer.name}</h5>
        <h5>{this.props.reduxState.bioReducer.birthday}</h5>
        <h5>{this.props.reduxState.bioReducer.homepage}</h5>
        <h5>{this.props.reduxState.bioReducer.place_of_birth}</h5>
        <h5>{this.props.reduxState.bioReducer.biography}</h5>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(About);
