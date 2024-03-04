import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../repositories/client';
import { AxiosResponse } from 'axios';

function* getProducts() {
    try {
        const response: AxiosResponse = yield api.get('/beers?page=1&per_page=20');
        if (response.data) {
            yield put(actions.getProductsSuccess(response.data));
        }
    } catch (e) {
        console.log("Error", e);
        yield put(actions.getProductsFailed());
    }
}

export default function* productsSaga() {
    yield takeLatest(actions.getProductsRequest, getProducts);
}