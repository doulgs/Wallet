import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {
  Container,
  ContainerText,
  Content2,
  Texto,
  Usuariotxt,
  UsuarioImg,
} from '../Styles/index';

function Header() {
  return (
    <Container>
      <Content2>
        <ContainerText>
          <Usuariotxt>Olá, Usuario</Usuariotxt>
          <Texto>Mantnha suas contas Atualizadas</Texto>
        </ContainerText>
        <UsuarioImg source={require('../../Image/Usuario.jpeg')} />
      </Content2>
    </Container>
  );
}
export default Header;
