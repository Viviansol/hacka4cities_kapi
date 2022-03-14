import React from 'react';

import { Container, Content, Separator, Title, Subtitle, ImageBackground, ImageLogo, Button, ButtonLabel } from './styles';
import mapa_background from '../../assets/images/mapa_background.png';
import logo from '../../assets/images/logo.png';

const Login = ({navigation}) => {
  return (
    <Container>
      <ImageBackground source={mapa_background} />

      <Content>
        <ImageLogo source={logo} />
        <Subtitle>Compartilhe sua localização com o app.</Subtitle>
        <Separator height={40} />

        <Button onPress={() => null}>
          <ButtonLabel>Localização</ButtonLabel>
        </Button>
        <Separator />
        <Button bgColor="#fff" onPress={() => null}>
          <ButtonLabel color="#004283">Cancelar</ButtonLabel>
        </Button>
      </Content>
    </Container>
  );
}

export default Login;