import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  shadowColor: #000;
  shadowOffset: { width: 0, height: 1 };
  shadowOpacity: 0.2;
  shadowRadius: 5;
  elevation: 0.2;
`;

export const Label = styled.Text`
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.fontColor};
`;

export const Image = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;
