import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carregar from './screens/carregar';
import Slogan from './screens/slogan';
// Adicione outras telas conforme necessário

const Stack = createStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                        <Stack.Navigator initialRouteName="Carregar">
                                        <Stack.Screen name="Carregar" component={Carregar} />
                                                        <Stack.Screen name="Slogan" component={Slogan} />
                                                                        {/* Adicione outras telas aqui */}
                                                                                    </Stack.Navigator>
                                                                                            </NavigationContainer>
                                                                                                );
                                                                                                }