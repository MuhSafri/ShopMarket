import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'

const Aplication=  createStackNavigator ({
    Home: Login,
    Register: Register,
    Dashboard: Dashboard,

 },
 {
  headerMode : 'none' 
});


export default createAppContainer(Aplication)