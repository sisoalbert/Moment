import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Header from '../components/Header';
//types
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

const Details = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <Button
          title="back to Home"
          onPress={() => {
            // Alert.alert("Welcome");
            navigation.navigate('MainTabs');
          }}
        />

        <Text>Details</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Details;

const styles = StyleSheet.create({});
