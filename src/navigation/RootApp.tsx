import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './MainStack';

const RootApp = () => {
  return (
    // This NavigationContainer will wrap the whole app
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootApp;

const styles = StyleSheet.create({});
