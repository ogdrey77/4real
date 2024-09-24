import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Carregar = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkIfRegistered = async () => {
      try {
        // Verificar se o usuário está cadastrado
        const userData = await AsyncStorage.getItem('user_data');
        if (userData) {
          // Se o usuário já estiver cadastrado, ir para a tela de login
          navigation.replace('Login');
        } else {
          // Se não estiver cadastrado, ir para a tela de slogan
          navigation.replace('Slogan');
        }
      } catch (error) {
        console.error('Erro ao verificar os dados do usuário:', error);
        // Em caso de erro, também ir para a tela de slogan
        navigation.replace('Slogan');
      }
    };
    const timer = setTimeout(() => {
      navigation.navigate('Slogan');
    }, 1); // 5 segundos para carregar

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#422074', '#8533cd']}
      style={styles.container}
    >
      <Image
        source={require('../assets/img/4REAL.png')}
        style={styles.logo}
      />
    </LinearGradient>
  );
};

export default Carregar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});