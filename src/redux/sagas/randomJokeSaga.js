import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchRandomJoke() {
    console.log('fetch random joke saga:')
    try {
        const response = yield call(axios.get, 'http://api.icndb.com/jokes/random?escape=javascript');
        yield put( {type: 'SET_RANDOM_JOKE', payload: response.data.value} );
        console.log(response.data)
    }
    catch(error) {
        console.log('error with random joke GET request', error);
    }
}

function* randomJokeSaga() {
    yield takeEvery( 'FETCH_RANDOM_JOKE', fetchRandomJoke);
}

export default randomJokeSaga;