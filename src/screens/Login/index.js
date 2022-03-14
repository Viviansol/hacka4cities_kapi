import React from 'react';

import { Container, Content, Separator, Title, Subtitle, ImageBackground } from './styles';
import predios2 from '../../assets/images/predios2.png';
import logo from '../../assets/images/logo.png';
import Button from '../../components/Button';

const Login = ({navigation}) => {
  return (
    <Container>
      <ImageBackground source={predios2} />

      <Content>
        <Title>Login</Title>
        <Subtitle>Faça login na sua conta</Subtitle>
        <Separator height={40} />
        <Button type="facebook" label="Sign In with Facebook" onPress={() => navigation.replace('Main')} />
        <Separator />
        <Button type="google" label="Sign In with Google" onPress={() => navigation.replace('Main')} />
        <Separator />
        <Button type="apple" label="Sign In with Apple" onPress={() => navigation.replace('Main')} />
      </Content>
    </Container>
  );
}

export default Login;