import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
//screen imports
import Header from '../components/NavBar';
import Empty from '../containers/Empty';
import FavContents from '../containers/FavContents';
//types
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

const Favourites = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <FavContents />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
