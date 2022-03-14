import { Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import Login from '../screens/Login';
import Main from '../screens/Main';
import{DrawerItemStyled} from './styles';

const Drawer = createDrawerNavigator();

const labelStyle = { fontSize: 16, lineHeight: 24, color: "#fff", fontWeight:'bold'};
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{ backgroundColor: "#004283" }} {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        labelStyle={labelStyle}
        label="Meu Perfil"
        onPress={() => null}
      /> */}
      <DrawerItem
        labelStyle={labelStyle}
        label="Denuncias"
        onPress={() => null}
      />
      <DrawerItem
        labelStyle={labelStyle}
        label="Alertas"
        onPress={() => null}
      />
      <DrawerItem
        labelStyle={labelStyle}
        label="Missões"
        onPress={() => null}
      />
      <DrawerItem
        labelStyle={labelStyle}
        label="Mascote"
        onPress={() => null}
      />
      <DrawerItem
        labelStyle={labelStyle}
        label="Sua economia"
        onPress={() => null}
      />
      <DrawerItem
        labelStyle={{...labelStyle, color: "#EF3561"}}
        label="Sair"
        onPress={() => props.navigation.replace('Login')}
      />
    </DrawerContentScrollView>
  );
}

export default function MainDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Meu Perfil" component={Main} options={{drawerLabelStyle: labelStyle}} />
    </Drawer.Navigator>
  );
}