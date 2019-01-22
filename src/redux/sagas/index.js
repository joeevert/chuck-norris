import { all } from 'redux-saga/effects';
import randomJokeSaga from './randomJokeSaga';
import bioSaga from './bioSaga';

export default function* rootSaga() {  
  yield all([
    randomJokeSaga(),
    bioSaga(),
  ]);
}
