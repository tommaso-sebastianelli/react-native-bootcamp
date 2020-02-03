/**
 * @format
 */

import 'react-native-gesture-handler';

import { persistor, store } from './src/redux/store';

import App from './App';
import { AppRegistry } from 'react-native';
import NavigationService from './NavigatorService';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import React from 'react';
import { name as appName } from './app.json';

function ReactRedux() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReactRedux);
