import { combineReducers } from 'redux';
import randomJokeReducer from './randomReducer';
import bioReducer from './bioReducer';

const rootReducer = combineReducers({
  randomJokeReducer,
  bioReducer

});

export default rootReducer;
