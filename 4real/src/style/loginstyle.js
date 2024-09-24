import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  // Estilo do container principal
  container: {
    flex: 1,
    alignItems: 'center',
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  grayBackground: {
    width: '100%',
    backgroundColor: '#EAEAEA',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 80,
    position: 'absolute',
    top: 355,
    left: 0,
  },

  backButton: {
    position: 'absolute',
    top: -150,
    left: 20,
    width: 10,
    height: 10,
  },

  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
    top: 405,
    zIndex: 10,
  },

  inputContainer: {
    width: '100%',
    paddingHorizontal: 17,
    marginTop: 0,
    top: -18,
  },

  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#737373',
    marginBottom: 5,
    marginTop: 20,
    top: 32,
    left: 10,
  },

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
    top: 5.5,
    width: 21,
    height: 21,
  },

  forgotPassword: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#737373',
    marginBottom: 5,
    marginTop: 20,
    top: 28,
    textAlign: 'right'
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
    top: -50,
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
    top: -119,
  },

  loginLink: {
    color: '#9452d1',
    marginTop: 5,
  },
});
