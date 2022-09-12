import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import { AntDesign } from "@expo/vector-icons";
// import colors from "../constants/GlobalStyles";
import {MaterialIcon} from '../components/Icon';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        // flex: 1,
      }}>
      {/* <TouchableOpacity>
        <MaterialIcon size="extraLarge" color="red" name="menu-left" />
      </TouchableOpacity> */}
      <Text
        style={{
          fontSize: 20,
          color: 'red',
          fontWeight: '500',
        }}>
        Moment F1
      </Text>

      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
        }}>
        {/* <Image
          source={require('../../assets/logo.png')}
          style={{
            width: 50,
            height: 50,
          }}
        /> */}
      </View>
      <View
        style={{
          flex: 0.25,
          alignItems: 'flex-end',
        }}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
