import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  // Estilo do fundo de tela
  background: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  // Estilo do fundo cinza no final da tela
  grayBackground: {
    width: '100%',
    backgroundColor: '#EAEAEA',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 80,
    position: 'absolute',
    top: 191,
    left: 0,
  },

  // Estilo do botão de voltar
  backButton: {
    position: 'absolute',
    top: -150, // Controle de posição vertical do botão de voltar
    left: 20,
    width: 6,
    height: 6,
  },

  // Criar Conta
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
    top: -31,
  },

  // Estilo dos inputs
  inputContainer: {
    width: '100%',
    paddingHorizontal: 17,
    marginTop: 0,
    top: -59,
  },

  // Estilo dos titulos das caixas
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#737373',
    marginBottom: 5,
    marginTop: 20,
    top: 32,
    left: 10,
  },

  // campo branco
  input: {
    height: 53,
    backgroundColor: '#FFFFFF',
    borderRadius: 11.5,
    paddingHorizontal: 15,
    marginBottom: -47.4,
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginTop: 30,
    top: -4,
    fontFamily: 'Poppins-Regular',
  fontSize: 12,
  },

  inputFocused: {
    borderColor: '#9452d1',
  },

  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 41,
    width: 21,
    height: 21,
  },

  buttonContainer: {
    width: '100%',
    paddingHorizontal: 8,
    marginVertical: 70,
  },

  button: {
    paddingVertical: 12,
    borderRadius: 650,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 0,
    top: -47,
  },

  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },

  loginText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#737373',
    textAlign: 'center',
    marginTop: 10,
    top: -115,
  },

  loginLink: {
    color: '#9452d1',
    marginTop: 5,
  },
});