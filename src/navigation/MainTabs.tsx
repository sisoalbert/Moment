import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import {View, Text} from 'react-native';
// import TabBarText from "../components/TabBarText";
// import TabBarIcon from "../components/TabBarIcon";

//
const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: '#c0c0c0',
          backgroundColor: '#ffffff',
        },
      }}>
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text>Home</Text>
            </View>
            // <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <Text>O</Text>
            </View>

            // <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text>Favourites</Text>
            </View>

            // <TabBarText focused={focused} title="Favourites" />
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <Text>O</Text>
            </View>

            // <TabBarIcon focused={focused} icon={'heart'} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
