import { all } from 'redux-saga/effects';
import randomJokeSaga from './randomJokeSaga';

export default function* rootSaga() {  
  yield all([
    randomJokeSaga(),
  ]);
}
