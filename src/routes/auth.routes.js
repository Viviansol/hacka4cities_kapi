import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Start from '../screens/Start';
import MainStack from './main.routes';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
}
