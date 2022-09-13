import {Alert, Button, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';
import NetInfo from '@react-native-community/netinfo';

//Screen imports
import NavBar from '../components/NavBar';
import HomeContents from '../containers/HomeContents';

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  const [isConnected, setIsConnect] = useState<boolean | null>();
  // grab information about the network connection just once
  NetInfo.fetch().then(state => {
    console.log('Is connected?', state.isConnected);
    setIsConnect(state.isConnected);
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {isConnected ? (
          <></>
        ) : (
          <>
            <View style={{height: 20, width: '100%', backgroundColor: 'black'}}>
              <Text style={{color: 'white', fontSize: 15}}>
                Please connect to the internet!
              </Text>
            </View>
          </>
        )}
        <View>
          <NavBar />

          <HomeContents />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
