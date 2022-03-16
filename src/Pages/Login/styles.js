import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Texto = styled.Text`
  color: #fff;
`;
export const Background = styled.Image`
  width: 100%;
  height: 40%;
`;
export const BackImage = styled.Image`
  position: absolute;
`;

// export const Bloco = styled(LinearGradient).attrs({
//   colors: ['#711AFF', '#00FFE0'],
//   // start: {x: 0.1, y: 0.0},
//   // end: {x: 0.0, y: 0.25},
// })`
//   width: 100%;
//   height: 70%;
//   border-bottom-left-radius: 40px;
//   border-bottom-right-radius: 40px;
// `;
