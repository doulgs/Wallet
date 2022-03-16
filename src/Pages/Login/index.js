import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Image} from 'react-native';

import {Container, Texto, Background, BackImage} from './styles';

export default function Login() {
  return (
    <>
      <Container></Container>
      <Background source={require('../../Image/Rectangle.png')} />
    </>
  );
}
