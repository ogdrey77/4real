import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const carregar = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('slogan,');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Img/4REAL.png')} style={styles.logo} />
    </View>
  );
};

export default Carregar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    background: 'linear-gradient(180deg, #8A2BE2, #9400D3)', // Degradê roxo de cima para baixo
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});