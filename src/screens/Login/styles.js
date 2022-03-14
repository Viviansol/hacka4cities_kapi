import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 300px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  color: #121515;
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #788190;
`;

export const Separator = styled.View`
  height: ${props => props.height || 20}px;
`;

export const ImageBackground = styled.Image`
  width: 252px;
  height: 240px;
  position: absolute;
  right: 0;
  top: 0;
`;
