import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';

import Header from '../components/Header';
//types
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList, DetailsScreenRouteProp} from '../types/navigation';

const Details = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<DetailsScreenRouteProp>();
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
        <Text>{route.params.name}</Text>

        <Text>Details</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Details;

const styles = StyleSheet.create({});
