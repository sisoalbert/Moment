import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

export default ({title, focused}: {title: string; focused: boolean}) => {
  return (
    <Text
      style={{
        marginBottom: 5,
        color: focused ? '#54902F' : 'rgb(143, 155, 179)',
        fontSize: 10,
        fontWeight: 'bold',
      }}>
      {title}
    </Text>
  );
};
