import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import { Ionicons } from "@expo/vector-icons";

const Empty = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: '100%',
        }}>
        {/* <Ionicons name="flash-off-outline" size={80} color="#999999" /> */}
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 14,
            color: '#999999',
          }}>
          Nothing here!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#999999',
          }}>
          This page is empty!
        </Text>
      </View>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({});
