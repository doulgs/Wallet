import React, {useState} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Routes from './src/Routes/index';

import Login from './src/Pages/Login';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#711AFF" barStyle="light-content" />

        <Routes />
      </NavigationContainer>
    </>
  );
}
