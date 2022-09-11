import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import { AntDesign } from "@expo/vector-icons";
// import colors from "../constants/GlobalStyles";

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
      <Text
        style={{
          fontSize: 20,
          color: '#54902F',
          fontWeight: '500',
        }}>
        Moment
      </Text>

      <TouchableOpacity
        style={{
          flex: 0.25,
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#54902F',
            fontWeight: '500',
          }}></Text>
      </TouchableOpacity>
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
