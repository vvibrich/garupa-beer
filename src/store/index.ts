import createSagaMiddleware from 'redux-saga';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { combinedReducers } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(combinedReducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);