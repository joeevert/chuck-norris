import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchMovies() {
    console.log('fetch movies saga:')
    try {
        const response = yield call(axios.get, 'https://api.themoviedb.org/3/person/51576/movie_credits?api_key=d07242c0a34ed9c275b2cad15eeb288e');
        yield put( {type: 'SET_MOVIES', payload: response.data.cast} );
        console.log('movies', response.data.cast)
    }
    catch(error) {
        console.log('error with random joke GET request', error);
    }
}

function* moviesSaga() {
    yield takeEvery( 'FETCH_MOVIES', fetchMovies);
}

export default moviesSaga;