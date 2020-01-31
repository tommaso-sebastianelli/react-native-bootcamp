import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import sagas from './auth/sagas' // FIXME

import authReducer from './auth/reducer'
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({auth: authReducer}),
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(sagas)
