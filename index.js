/**
 * @format
 */

import { Root } from "native-base";
import React from 'react';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { name as appName } from './app.json';
import NavigationService from './NavigatorService';
import { persistor, store } from './src/redux/store';



function ReactRedux() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root>
          <App ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
        </Root>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReactRedux);
