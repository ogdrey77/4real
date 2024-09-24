import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Carregar from '../screens/carregar';
import Slogan from '../screens/slogan';
import Cadastro from '../screens/cadastro';
import Login from '../screens/login';
import Home from '../screens/home';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Carregar">
      <Stack.Screen name="Carregar" component={Carregar} options={{ headerShown: false }} />
      <Stack.Screen name="Slogan" component={Slogan} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
