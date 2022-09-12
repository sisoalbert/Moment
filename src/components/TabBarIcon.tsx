import React from 'react';
import {Text} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';
import {MaterialIcon} from '../components/Icon';

export default (icon: string) => {
  return (
    <>
      <MaterialIcon size="extraLarge" color="red" name={icon} />
    </>
    // <Ionicons
    //   name={icon}
    //   style={{ marginBottom: -7 }}
    //   size={24}
    //   color={focused ? "#54902F" : "rgb(143, 155, 179)"}
    // />
  );
};
