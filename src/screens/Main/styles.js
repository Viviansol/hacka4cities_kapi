import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: #fff;
`;

export const Content = styled.View`
  height: 50%;
  padding: 34px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  font-size: 16px;
  line-height: 28px;
  background: ${props => props.bgColor || "#004283"};
  border-radius: 40px;
  width: 200px;
  height: 64px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled.Text`
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.color || "#fff"};
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -0.408px;
  max-width: 230px;
  text-align: center;

  color: #7E7E7E;
`;

export const Separator = styled.View`
  height: ${props => props.height || 20}px;
`;

export const ImageLogo = styled.Image`
  width: 108px;
  height: 36px;
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 70%;
`;
