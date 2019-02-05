import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Movies.css';
// import { Button, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Movies extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <div className="imageContainer">
        {/* {JSON.stringify(this.props.reduxState.moviesReducer)} */}
        {this.props.reduxState.moviesReducer.map((movie, index) =>
          <img key={index} className="image" src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
        )}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Movies);
