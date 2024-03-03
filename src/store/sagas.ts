import { all } from 'redux-saga/effects';
import productsSaga from './Products/saga';

function* rootSaga() {
    yield all([
        productsSaga(),
    ]);
}

export default rootSaga;