/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/redux/store';

function ReactRedux() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReactRedux);
