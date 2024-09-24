
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375); 
const scaleSize = (size) => size * (height / 667);

export default StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: '8%',
  },
  logo: {
    width: scaleSize(150),
    height: scaleSize(143),
    resizeMode: 'contain',
    position: 'absolute',
    top: scaleSize(186),
    left: scaleSize(4.5),
  },
  textContainer: {
    position: 'absolute',
    top: scaleSize(289),
    left: 0,
    right: 0,
    paddingHorizontal: '8%',
  },
  sloganText: {
    fontFamily: 'Poppins-Medium',
    fontSize: scaleFont(37.05),
    color: '#FFFFFF',
    textAlign: 'left',
    left: 2,
    marginBottom: scaleSize(20),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: scaleSize(-47),
    left: 0,
    right: 0,
    paddingHorizontal: '0%',
  },
  button: {
    paddingVertical: scaleSize(10),
    borderRadius: scaleSize(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: scaleFont(17),
    color: '#FFFFFF',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: scaleSize(-77),
    left: 0,
    right: 0,
  },
  loginText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loginLink: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(12),
    color: '#9452d1',
    textAlign: 'center',
  },
});
