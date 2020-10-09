import React from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.8;

type IPropsCarouselProduct = {
  onClick: (data: any) => void;
};

const products = [
  {
    id: 1,
    name: 'Nike Vapormax',
    source: require('../assets/products/product1.png'),
  },
  {
    id: 2,
    name: 'Nike Airmax',
    source: require('../assets/products/product2.png'),
  },
  {
    id: 3,
    name: 'Nike Seasonmax',
    source: require('../assets/products/product1.png'),
  },
  {
    id: 4,
    name: 'Nike Paralax',
    source: require('../assets/products/product2.png'),
  },
  {
    id: 5,
    name: 'Nike Solidmax',
    source: require('../assets/products/product1.png'),
  },
];
export function CarouselProduct(props: IPropsCarouselProduct) {
  return (
    <ScrollView
      contentContainerStyle={{padding: 10}}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}>
      {products.map((product) => (
        <View
          key={product.id}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            width: 130,
            marginRight: 20,
            overflow: 'hidden',
            borderRadius: 8,
          }}>
          <Image
            source={product.source}
            resizeMode="contain"
            style={{width: 130}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#747474',
              marginTop: 0,
              padding: 7,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}>
            <TouchableOpacity
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#ffffff',
                borderRadius: 4,
                marginRight: 5,
              }}>
              <Text
                style={{color: '#444444', fontSize: 11, textAlign: 'center'}}>
                +
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 11, color: '#ffffff'}}>{product.name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
