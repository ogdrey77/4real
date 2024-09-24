import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// retângulo branco
const rectangleWidth = width * 0.88;
const rectangleHeight = height * 0.21;
const rectangleTop = height * 0.12;
const rectangleLeft = width * 0.06;
const borderRadius = 24;

// quadrados pequenos
const squareSize = width * 0.143;
const squareMargin = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  topSection: {
    height: height * 0.253,
    width: '100%',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

gradient: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '24.5%',
  borderBottomLeftRadius: 22,
  borderBottomRightRadius: 22,
  zIndex: 0,
},

  smallImage: {
    position: 'absolute',
    top: -height * 0.02,
    left: width * 0.07,
    width: width * 0.3,
    height: height * 0.19,
  },

searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 3,
    width: '41.5%',
    marginTop: -80,
    marginRight: 24,
    alignSelf: 'flex-end',
},

searchInput: {
    flex: 1,
    fontSize: width * 0.036,
    color: '#00000',
    paddingVertical: 8,
    paddingHorizontal: 1,
    fontFamily: 'Poppins-Regular',
},

searchButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
},

searchIcon: {
    width: width * 0.07,
    height: height * 0.04,
    resizeMode: 'contain',
},

  whiteRectangle: {
    position: 'absolute',
    top: rectangleTop,
    left: rectangleLeft,
    width: rectangleWidth,
    height: rectangleHeight,
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallSquareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: height * 0.02,
    left: width * 0.05,
    width: width * 0.9,
    flexWrap: 'wrap',
    alignItems: 'center',
    top: height * 0.365,
  },

  smallSquare: {
    width: squareSize,
    height: squareSize,
    backgroundColor: '#DAD4EB',
    borderRadius: 10,
    margin: squareMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallSquareText: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: 3,
    fontSize: width * 0.03, // Ajuste responsivo para texto
  },

  smallSquareImage: {
    width: width * 0.07, // Responsivo para imagens
    height: height * 0.07,
    resizeMode: 'contain',
  },

  bottomSection: {
    backgroundColor: '#EAEAEA',
    width: '100%',
    height: height * 3,
    position: 'absolute',
    bottom: 0,
    top: height * 0.515,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },

  popularesText: {
    position: 'absolute',
    left: width * 0.058,
    top: height * 0.286,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: width * 0.047, // Ajuste responsivo para o texto de "Populares"
    zIndex: 10,
  },

  verTudoButton: {
    backgroundColor: '#7F32C8',
    paddingVertical: height * 0.004,
    paddingHorizontal: width * 0.034,
    borderRadius: width * 0.02,
    alignSelf: 'flex-end',
    marginRight: width * 0.064,
    marginTop: height * 0.2885,
    zIndex: 10,
  },

  verTudoText: {
    color: '#FFF',
    fontSize: width * 0.03, // Ajuste responsivo para o texto de botão
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 1,
  },

  rectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 13,
    flexWrap: 'nowrap',
  },

  verticalRectangle: {
    width: width * 0.375,
    height: height * 0.31,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 2,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },

  productImage: {
    width: width * 0.346,
    height: height * 0.22,
    resizeMode: 'contain',
    marginTop: -9,
    borderRadius: 0,
  },

  productName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: width * 0.03,
    color: '#000',
    position: 'absolute',
    bottom: 66.5,
    left: 10,
    textAlign: 'left',
  },

  colorBox: {
    backgroundColor: '#EAEAEA',
    borderRadius: 4,
    paddingHorizontal: 13.8,
    paddingVertical: 1.5,
    marginTop: 15,
    alignItems: 'left',
    left: -27,
  },

  colorText: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.025,
    color: '#000',
  },

  priceText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#000',
    marginTop: 3.9,
    alignItems: 'left',
    left: -30,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 56,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    top: 5,
  },
});

export default styles;
