import { combineReducers } from 'redux';
import productReducer from './Products/reducer';

export const combinedReducers = combineReducers({
    products: productReducer,
});