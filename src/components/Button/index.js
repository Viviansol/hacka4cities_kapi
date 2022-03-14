import React from 'react';
import { View } from 'react-native';

import google from '../../assets/images/google.png';
import facebook from '../../assets/images/facebook.png';
import apple from '../../assets/images/apple.png';

import { Container, Image, Label } from './styles';

const assets = {
  google: {
    image: google,
    bgColor: '#fff',
    fontColor: '#788190'
  },
  facebook: {
    image: facebook,
    bgColor: '#1877F2',
    fontColor: '#fff'
  },
  apple: {
    image: apple,
    bgColor: '#000',
    fontColor: '#fff'
  },
}

const Button = ({ type, label, onPress }) => {
  return (
    <Container styles={{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 0.5,
    }} bgColor={assets[type].bgColor} onPress={onPress}>
      <Image source={assets[type].image} />
      <Label fontColor={assets[type].fontColor}>{label}</Label>
    </Container>
  );
}

export default Button;