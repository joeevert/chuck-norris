import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Movies.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Movies extends Component {
  state = {
    modal: false
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  toggle = (overview) => {
    // this.setState({
    //   modal: !this.state.modal
    // });
    alert(overview)
  }

  render() {
    return (
      <div className="imageContainer">
        {/* {JSON.stringify(this.props.reduxState.moviesReducer)} */}
        {this.props.reduxState.moviesReducer.map((movie, index) =>
        <div key={index}>
          <img 
            className="image" 
            src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`} 
            alt={movie.title}
            onClick={() => this.toggle(movie.overview)}
          />
        </div>
        )}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Movies);
