import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/containers/Login';
import Home from './src/containers/Home';
import AuthLoadingScreen from './src/containers/AuthLoadingScreen';

const AppStack = createStackNavigator({ Home: Home, Other: Home });
const AuthStack = createStackNavigator({ SignIn: Login });

const StackNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default createAppContainer(StackNavigator);