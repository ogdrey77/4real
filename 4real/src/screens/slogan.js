import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/sloganstyle';

export default function Slogan() {
  const navigation = useNavigation();
  const [scaleValue] = React.useState(new Animated.Value(1)); // Inicializa o valor da escala

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95, // Reduz a escala para 95% do tamanho original
      duration: 150, // Duração do efeito
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1, // Retorna a escala ao tamanho original
      duration: 150, // Duração do efeito
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={require('../assets/img/fundo.jpg')}
      style={styles.background}
    >
      <Image
        source={require('../assets/img/4REAL.png')}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.sloganText}>
          Os tênis que{'\n'}
          você ama,{'\n'}
          com preços{'\n'}
          que você{'\n'}
          merece
        </Text>

        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate('Cadastro')}
          activeOpacity={1} // Remove o efeito de opacidade padrão
        >
          <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleValue }] }]}>
            <LinearGradient
              colors={['#6330AE', '#8533CD']}
              start={[1, 0]}
              end={[0, 1]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Cadastre-se</Text>
            </LinearGradient>
          </Animated.View>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Já tem uma conta? </Text>
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>Entrar</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
