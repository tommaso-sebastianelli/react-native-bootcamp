import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PageOne from './src/containers/PageOne';
import PageTwo from './src/containers/PageTwo';

const TabNavigator = createBottomTabNavigator({
  PageOne: PageOne,
  PageTwo: PageTwo
},
{
  initialRouteName: 'PageOne',
});

export default createAppContainer(TabNavigator);