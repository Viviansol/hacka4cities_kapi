import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { Container, Content, ImageLogo, Title, ImageBackground } from './styles';
import predios1 from '../../assets/images/predios1.png';
import logo from '../../assets/images/logo.png';

const Start = ({ navigation }) => {
  return (
      <TouchableWithoutFeedback onPress={() => navigation.replace('Login')}>

      <Container>
        <ImageLogo source={logo} />

        <Content>
          <Title>Frase contando resumidamente a solução</Title>
        </Content>
        <ImageBackground source={predios1} /> 
        {/* <RoundedButton onPress={() => null}>
            
        </RoundedButton>  */}
      </Container>
      </TouchableWithoutFeedback>
  );
}

export default Start;