import {Alert, Button, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

//Screen imports
import Header from '../components/Header';
import HomeContents from '../containers/HomeContents';

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
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
