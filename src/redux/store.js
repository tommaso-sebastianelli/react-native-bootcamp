import { Platform } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'


import sagas from './auth/sagas' // FIXME

import reducers from './reducers';

import { persistCombineReducers, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistCombineReducers(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const enhancers =
    Platform.OS === 'ios'
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware);

const store = createStore(
    persistedReducer,
    enhancers
);

const persistor = persistStore(store, null);

sagaMiddleware.run(sagas)

export { persistor, store };
