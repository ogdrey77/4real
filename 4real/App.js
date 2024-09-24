import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';
// Aqui Solicita permissão pra mandar notificações
async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permissão de notificação não concedida.');
    return;
  }
}
//3 tipos de notificação: Diária, a cada 2 dias e a semanal
async function scheduleNotifications() {
  // Notificação de 24 horas
  await Notifications.cancelScheduledNotificationAsync('dailyNotification');
  await Notifications.scheduleNotificationAsync({
    identifier: 'dailyNotification',
    content: {
      title: 'Vem conferir 😱',
      body: 'Os tênis mais hypados da semana com os melhores preços do mercado!',
      data: { type: 'daily' },
    },
    trigger: {
      seconds: 24 * 60 * 60, // 24 horas
      repeats: true,
    },
  });

  // Notificação de 48 horas
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'E por tempo limitado!',
      body: "desconto de 10% em qualquer tênis da linha 'Nike Air Max'",
      data: { type: '48h' },
    },
    trigger: {
      seconds: 48 * 60 * 60, // 48 horas
      repeats: true,
    },
  });

  // Notificação semanal
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Promoção da semana 🔥',
      body: "'Nike Air Force 1' por apenas R$759,99 à vista",
      data: { type: 'weekly' },
    },
    trigger: {
      seconds: 7 * 24 * 60 * 60, // 7 dias
      repeats: true,
    },
  });
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    registerForPushNotificationsAsync();
    scheduleNotifications();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
