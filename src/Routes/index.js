import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import About from '../Pages/About/index';
import Home from '../Pages/Home/index';
import Settings from '../Pages/Settings/index';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  let color = '#1cffd9';
  return (
    <Tab.Navigator
      name="Home"
      initialRouteName="Feed"
      activeColor="#00FFE0"
      inactiveColor="#FFF"
      barStyle={{backgroundColor: '#36393f'}}
      labelStyle={{fontSize: 14}}>
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="vuetify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
