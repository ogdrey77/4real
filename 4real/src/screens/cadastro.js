// src/screens/cadastro.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, Animated, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importando do expo-linear-gradient
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importando AsyncStorage
import styles from '../style/cadastrostyle'; // Ajuste o caminho conforme necessário

const Cadastro = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [name, setName] = useState(''); // Estado para armazenar o nome
  const [phone, setPhone] = useState(''); // Estado para armazenar o telefone
  const [email, setEmail] = useState(''); // Estado para armazenar o email
  const [password, setPassword] = useState(''); // Estado para armazenar a senha
  const [scaleValue] = useState(new Animated.Value(1)); // Inicializa o valor da escala

  // Função para reduzir a escala quando o botão é pressionado
  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95, // Reduz a escala para 95% do tamanho original
      duration: 150, // Duração do efeito
      useNativeDriver: true,
    }).start();
  };

  // Função para restaurar a escala ao ser solto
  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1, // Retorna a escala ao tamanho original
      duration: 150, // Duração do efeito
      useNativeDriver: true,
    }).start(() => {
      handleCadastro(); // Chama a função de cadastro após o efeito
    });
  };

  // Função para salvar dados do usuário no AsyncStorage
  const saveUserData = async () => {
    try {
      const userData = {
        name,
        phone,
        email,
        password,
      };
      await AsyncStorage.setItem('user_data', JSON.stringify(userData));
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.replace('Home'); // Navega para a tela Home após o cadastro
    } catch (error) {
      console.error('Erro ao salvar dados do usuário:', error);
      Alert.alert('Erro', 'Houve um erro ao salvar os dados.');
    }
  };

  // Função de cadastro (navegação para a tela Home)
  const handleCadastro = () => {
    if (name && phone && email && password) {
      saveUserData(); // Salva os dados no AsyncStorage
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Move o layout quando o teclado aparece
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        keyboardShouldPersistTaps="handled" // Permite tocar fora do teclado para fechá-lo
      >
        <ImageBackground source={require('../assets/img/fundo.jpg')} style={styles.background}>
          <View style={styles.grayBackground}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/img/icons/back.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
            <Text style={styles.title}>Criar Conta</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome Completo</Text>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === 'name' && styles.inputFocused,
                ]}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
                selectionColor="#000000"
                value={name}
                onChangeText={setName} // Atualiza o estado do nome
              />
              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === 'phone' && styles.inputFocused,
                ]}
                onFocus={() => setFocusedInput('phone')}
                onBlur={() => setFocusedInput(null)}
                selectionColor="#000000"
                value={phone}
                onChangeText={setPhone} // Atualiza o estado do telefone
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === 'email' && styles.inputFocused,
                ]}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                selectionColor="#000000"
                value={email}
                onChangeText={setEmail} // Atualiza o estado do email
              />
              <Text style={styles.label}>Senha</Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={[
                    styles.input,
                    focusedInput === 'password' && styles.inputFocused,
                  ]}
                  secureTextEntry={true}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  selectionColor="#000000"
                  value={password}
                  onChangeText={setPassword} // Atualiza o estado da senha
                />
                <Image source={require('../assets/img/vizualizar.png')} style={styles.eyeIcon} />
              </View>
            </View>
            
            {/* Botão "Cadastrar" com efeito de escala, sem diminuir opacidade */}
            <View style={styles.buttonContainer}>
              <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                <TouchableOpacity
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  activeOpacity={1} // Remove o efeito de opacidade padrão
                >
                  <LinearGradient
                    colors={['#6330AE', '#8533CD']}
                    start={[1, 0]}
                    end={[0, 1]}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
            </View>

            <Text style={styles.loginText}>
              Já tem uma conta? <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>Entrar</Text>
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Cadastro;
