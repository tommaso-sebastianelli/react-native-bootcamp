import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/containers/Login';

const StackNavigator = createStackNavigator({
  Login: Login,
},
{
  initialRouteName: 'Login',
});

export default createAppContainer(StackNavigator);