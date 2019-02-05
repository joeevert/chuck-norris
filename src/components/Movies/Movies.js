import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, NavLink } from 'reactstrap';

class Movies extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <section className="App">
        {/* <div className="imageDiv">
          <img src='/images/chuck-norris.jpg' alt="Chuck Norris" className="img-fluid" />
        </div> */}
        {/* {JSON.stringify(this.props.reduxState.moviesReducer)} */}
        {this.props.reduxState.moviesReducer.map((movie, index) =>
          <div key={index}> 
            {/* <p>{movie.title} as {movie.character}</p> */}
            <img src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`} />
            {/* <img src={`http://image.tmdb.org/t/p/w400${movie.backdrop_path}`} /> */}

          </div>  
        )}
        
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });

export default connect(mapReduxStateToProps)(Movies);
