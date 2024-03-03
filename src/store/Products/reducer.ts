import * as types from './types';
import { IAction } from '../../interfaces/store';
import { Product } from '../../models/product';

interface IState {
    loading: boolean;
    products: Product[];
}

const initialState: IState = {
    loading: false,
    products: [],
};

const productReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST: {
            return { ...state, loading: true };
        }
        case types.GET_PRODUCTS_REQUEST_SUCCESS: {
            return { ...state, products: action.payload, loading: false };
        }
        case types.GET_PRODUCTS_REQUEST_FAILED: {
            return { ...state, loading: false };
        }
        default: {
            return state;
        }
    }
};

export default productReducer;