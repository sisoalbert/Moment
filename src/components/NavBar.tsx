import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MaterialIcon} from './Icon';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <View>
        <Image
          source={require('../assets/logo.png')}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: 'red',
          fontWeight: '500',
        }}>
        Moment F1
      </Text>
      <TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon size="large" color="black" name="filter-outline" />
        </TouchableOpacity>
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
