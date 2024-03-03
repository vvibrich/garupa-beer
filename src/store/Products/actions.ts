import { Product } from '../../models/product';
import * as types from './types';

export const getProductsRequest = () => ({
    type: types.GET_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (data: Product[]) => ({
    type: types.GET_PRODUCTS_REQUEST_SUCCESS,
    payload: data,
});

export const getProductsFailed = () => ({
    type: types.GET_PRODUCTS_REQUEST_FAILED,
});