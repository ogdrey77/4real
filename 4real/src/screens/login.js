// src/screens/login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'; // Importa componentes do React Native
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../style/loginstyle';
import { useNavigation } from '@react-navigation/native';


const Login = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground source={require('../assets/img/fundo.jpg')} style={styles.background}>
        
        {/* Botão de voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/icons/back.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        {/* Título "Entrar" */}
        <Text style={styles.title}>Entrar</Text>

        {/* Container cinza para os inputs */}
        <View style={styles.grayBackground}>

          {/* Campo de entrada para o email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[
                styles.input,
                focusedInput === 'email' && styles.inputFocused,
              ]}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              selectionColor="#000000"
            />
          </View>

          {/* Campo de entrada para a senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === 'password' && styles.inputFocused,
                ]}
                secureTextEntry={!showPassword}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                selectionColor="#000000"
              />
              {/* Ícone para visualizar a senha */}
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={require('../assets/img/vizualizar.png')} style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>
            {/* Link "Esqueceu a senha?" */}
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </View>

          {/* Botão "Entrar" */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8}>
              <LinearGradient
               colors={['#6330AE', '#8533CD']}
              start={[1, 0]}
              end={[0, 1]}
              style={styles.button}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Link para a tela de cadastro */}
          <Text style={styles.loginText}>
            Não tem uma conta? <Text style={styles.loginLink} onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text>
          </Text>

        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
