import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MaterialIcon} from '../components/Icon';

const NavBar = props => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialIcon size="large" color="black" name="keyboard-backspace" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          color: 'red',
          fontWeight: '500',
        }}>
        Moment F1
      </Text>
      <TouchableOpacity onPress={props.heartPress}>
        <MaterialIcon size="large" color="black" name="cards-heart-outline" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
