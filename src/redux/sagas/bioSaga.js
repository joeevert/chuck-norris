import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchBio() {
    console.log('fetch bio saga:')
    try {
        const response = yield call(axios.get, 'https://api.themoviedb.org/3/person/51576?api_key=d07242c0a34ed9c275b2cad15eeb288e&language=en-US');
        yield put( {type: 'SET_BIO', payload: response.data} );
        console.log(response.data)
    }
    catch(error) {
        console.log('error with random joke GET request', error);
    }
}

function* bioSaga() {
    yield takeEvery( 'FETCH_BIO', fetchBio);
}

export default bioSaga;