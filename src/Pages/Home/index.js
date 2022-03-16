import React from 'react';
import Header from '../../components/Header';
import {View, Text} from 'react-native';

import {Container, Texto} from '../Styled/index';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Texto>Home</Texto>
      </Container>
    </>
  );
}
export default Home;
