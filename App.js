import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PageOne from './src/containers/PageOne';
import PageTwo from './src/containers/PageTwo';

const AppNavigator = createStackNavigator({
  PageOne: PageOne,
  PageTwo: PageTwo
},
{
  initialRouteName: 'PageOne',
});

export default createAppContainer(AppNavigator);