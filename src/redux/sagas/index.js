import { all } from 'redux-saga/effects';
import randomJokeSaga from './randomJokeSaga';
import bioSaga from './bioSaga';
import moviesSaga from './moviesSaga';

export default function* rootSaga() {  
  yield all([
    randomJokeSaga(),
    bioSaga(),
    moviesSaga()
  ]);
}
