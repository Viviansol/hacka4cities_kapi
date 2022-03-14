import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

export const DrawerItemStyled = styled(DrawerItem).attrs({
  labelStyle: { fontSize: 16, lineHeight: 24, color: "#fff", fontWeight:'bold'},
  // labelStyle: { fontSize: 16, lineHeight: 24, color: "#fff", fontWeight:'bold'}
})`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.fontColor || "#fff"};
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
