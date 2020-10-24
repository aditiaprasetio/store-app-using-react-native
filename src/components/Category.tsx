import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {FONT} from '../assets/style';

const listCategories = [
  {
    id: 'REST',
    name: 'Restoran',
    image: require('../assets/categories/Restaurant.png'),
  },
  {
    id: 'COFF',
    name: 'Cafe',
    image: require('../assets/categories/Cafe.png'),
  },
  {
    id: 'HOTEL',
    name: 'Hotel',
    image: require('../assets/categories/Hotel.png'),
  },
  {
    id: 'GROC',
    name: 'Grosir',
    image: require('../assets/categories/Grocery.png'),
  },
  {
    id: 'BAKE',
    name: 'Toko Roti',
    image: require('../assets/categories/Bakery.png'),
  },
  {
    id: 'SHAR',
    name: 'Kaki Lima',
    image: require('../assets/categories/streetfood.png'),
  },
  {
    id: 'FARM',
    name: 'Perikanan',
    image: require('../assets/categories/perikanan.png'),
  },
];

export default function Category(props: any) {
  const [isShowAll, setIsShowAll] = useState(false);

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 20,
        shadowRadius: 10,
        shadowColor: '#333',
        elevation: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            padding: 2,
          }}>
          <Text style={FONT.sectionTitle}>
            {isShowAll ? 'Lainnya' : 'Kategori'}
          </Text>
        </View>
        {isShowAll && (
          <TouchableOpacity
            onPress={() => setIsShowAll(false)}
            style={{
              padding: 5,
            }}>
            <Text style={{color: 'gray'}}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {isShowAll &&
          listCategories.map((category, index) => (
            <TouchableOpacity
              onPress={() => props.onSelected(category.id)}
              key={index}
              style={{
                width: Dimensions.get('window').width / 5,
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image source={category.image} style={{width: 52, height: 52}} />
              <Text style={{textAlign: 'center'}}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        {!isShowAll &&
          listCategories
            .filter((item, key) => key < 3)
            .map((category, index) => (
              <TouchableOpacity
                onPress={() => props.onSelected(category.id)}
                key={index}
                style={{
                  width: Dimensions.get('window').width / 5,
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <Image
                  source={category.image}
                  style={{width: 52, height: 52}}
                />
                <Text style={{textAlign: 'center'}}>{category.name}</Text>
              </TouchableOpacity>
            ))}
        {!isShowAll && (
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center'}}
            onPress={() => setIsShowAll(true)}>
            <Image
              source={require('../assets/categories/Others.png')}
              style={{width: 52, height: 52}}
            />
            <Text style={{textAlign: 'center'}}>Lainnya</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
