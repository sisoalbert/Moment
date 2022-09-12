import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainStackParamList} from '../types/navigation';

import Details from '../screens/Details';
import Home from '../screens/Home';
import MainTabs from './MainTabs';

const MainStack = createNativeStackNavigator<MainStackParamList>();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  );
};

export default Main;
