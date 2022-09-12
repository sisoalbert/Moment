import {Alert, Button, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';
import NetInfo from '@react-native-community/netinfo';

//Screen imports
import Header from '../components/Header';
import HomeContents from '../containers/HomeContents';

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  const [isConnected, setIsConnect] = useState<boolean | null>();
  // grab information about the network connection just once
  // NetInfo.fetch().then(state => {
  //   console.log('Is connected?', state.isConnected);
  //   setIsConnect(state.isConnected);
  // });
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <View>
          <HomeContents />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});

{
  /* <Button
            title="hello"
            onPress={() => {
              // Alert.alert("Welcome");
              navigation.navigate('Details');
            }}
          /> */
}
