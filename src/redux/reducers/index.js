import { combineReducers } from 'redux';
import randomJokeReducer from './randomReducer';

const rootReducer = combineReducers({
  randomJokeReducer,

});

export default rootReducer;
