import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../repositories/client';
import { Product } from '../../models/product';
import { AxiosResponse } from 'axios';

// function* getProducts() {
//     try {
//         var responseProducts: Product[] = [];
//         yield api.get('/beers').then((response) => {
//             // if(!responseProducts){
//                 console.log("RESPONSE BEERS", response.data)
//                 responseProducts = response.data;
//             // }
//         }).catch((error) => {
//             console.log(error);
//         })
//         yield put(actions.getProductsSuccess(responseProducts));
//     } catch (e) {
//         console.log("Error", e)
//         yield put(actions.getProductsFailed());
//     }
// }
function* getProducts() {
    try {
        const response: AxiosResponse = yield api.get('/beers?page=1&per_page=20');
        if (response.data) {
            // console.log("RESPONSE", response.data)
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