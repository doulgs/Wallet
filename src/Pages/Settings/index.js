import React from 'react';
import Header from '../../components/Header';
import {View, Text} from 'react-native';

import {Container, Texto} from '../Styled/index';

function Settings() {
  return (
    <>
      <Header />
      <Container>
        <Texto>Settings</Texto>
      </Container>
    </>
  );
}
export default Settings;
