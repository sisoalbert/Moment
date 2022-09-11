import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Details from '../screens/Details';
import Home from '../screens/Home';
// import MainTabs from "../navigation/MainTabs";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="MainTabs" component={Home} />
      <MainStack.Screen name="Details" component={Details} />
      {/* <MainStack.Screen name="Search" component={Search} /> */}
    </MainStack.Navigator>
  );
};

export default Main;
