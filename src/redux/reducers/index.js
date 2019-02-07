import { combineReducers } from 'redux';
import randomJokeReducer from './randomJokeReducer';
import bioReducer from './bioReducer';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  randomJokeReducer,
  bioReducer,
  moviesReducer
});

export default rootReducer;
