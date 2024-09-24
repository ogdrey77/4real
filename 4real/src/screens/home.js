import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import styles from '../style/homestyle';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const categoryImage = require('../assets/img/icons/Categoria.png');
const storesImage = require('../assets/img/icons/Lojas.png');
const couponsImage = require('../assets/img/icons/Cupons.png');
const offersImage = require('../assets/img/icons/Cupons.png');

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // fontes
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  const handleSearch = () => {
    const products = ['Nike', 'Adidas', 'Asics', 'mizuno', 'air force'];
    if (products.includes(searchQuery)) {
      setSearchResult(`Produto encontrado: ${searchQuery}`);
    } else {
      setSearchResult('Produto não encontrado');
    }
  };

  const navigation = useNavigation();

  const sneakers = [
    { id: 1, name: 'Nike Air Force 1', image: require('../assets/img/tenis/Force1.jpg'), colors: '2 Cores', price: 'R$759,99' },
    { id: 2, name: 'Nike Air Jordan 4', image: require('../assets/img/tenis/Jordan4.jpg'), colors: '3 Cores', price: 'R$1400,00' },
    { id: 3, name: 'Adidas ADI2000', image: require('../assets/img/tenis/adi2000.jpg'), colors: '3 Cores', price: 'R$800,00' },
    { id: 4, name: 'Asics Gel-Kaya...', image: require('../assets/img/tenis/Asics.jpg'), colors: '2 Cores', price: 'R$999,99' },
  ];

  const renderIcon = (tab, activeIcon, inactiveIcon) => {
    return activeTab === tab ? activeIcon : inactiveIcon;
  };

  return (
    <View style={styles.container}>
       <View style={[styles.container, { backgroundColor: '#F5F5F5' }]}>

        <LinearGradient
          colors={['#6330AE', '#8533CD']}
          style={styles.gradient}
        />

        <View style={styles.topSection}>
          <Image source={require('../assets/img/4REAL.png')} style={styles.smallImage} />

          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
              <Icon name="search-outline" size={20} color="#000" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar"
              placeholderTextColor="#000"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <View style={styles.whiteRectangle} />

        <View style={styles.smallSquareContainer}>
          {[{ label: 'Categoria', image: categoryImage }, { label: 'Lojas', image: storesImage }, { label: 'Cupons', image: couponsImage }, { label: 'Ofertas', image: offersImage }].map((item, index) => (
            <View key={index} style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.smallSquare} onPress={() => navigation.navigate('Home')}>
                <Image source={item.image} style={styles.smallSquareImage} />
              </TouchableOpacity>
              <Text style={styles.smallSquareText}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.popularesContainer}>
          <Text style={styles.popularesText}>Populares</Text>
          <TouchableOpacity style={styles.verTudoButton} onPress={() => navigation.navigate('VerTudo')}>
            <Text style={styles.verTudoText}>Ver Tudo</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.rectangleContainer}>
            {sneakers.map((sneaker) => (
              <TouchableOpacity key={sneaker.id} style={styles.verticalRectangle} onPress={() => navigation.navigate('Escolher', { id: sneaker.id })}>
                <Image source={sneaker.image} style={styles.productImage} />
                {fontsLoaded && (
                  <>
                    <Text style={styles.productName}>{sneaker.name}</Text>
                    <View style={styles.colorBox}>
                      <Text style={styles.colorText}>{sneaker.colors}</Text>
                    </View>
                    <Text style={styles.priceText}>{sneaker.price}</Text>
                  </>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={{ padding: 20 }}>
          <Text style={{ color: 'black', fontFamily: 'Poppins-SemiBold' }}>{searchResult}</Text>
        </View>

        {/* Barra de navegação inferior com imagens personalizadas */}
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('Home'); }}>
            <Image source={renderIcon('Home', require('../assets/img/icons/homeC.png'), require('../assets/img/icons/home.png'))} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setActiveTab('Favoritos'); navigation.navigate('Favoritos'); }}>
            <Image source={renderIcon('Favoritos', require('../assets/img/icons/coracaoC.png'), require('../assets/img/icons/coracao.png'))} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setActiveTab('Notificacoes'); navigation.navigate('Notificacoes'); }}>
            <Image source={renderIcon('Notificacoes', require('../assets/img/icons/sinoC.png'), require('../assets/img/icons/sino.png'))} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setActiveTab('Sacola'); navigation.navigate('Sacola'); }}>
            <Image source={renderIcon('Sacola', require('../assets/img/icons/sacolaC.png'), require('../assets/img/icons/sacola.png'))} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setActiveTab('Perfil'); navigation.navigate('Perfil'); }}>
            <Image source={renderIcon('Perfil', require('../assets/img/icons/perfilC.png'), require('../assets/img/icons/perfil.png'))} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>  
    </View>
  );
};

export default Home;