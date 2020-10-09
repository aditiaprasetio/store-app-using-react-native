import React from 'react';
import {ScrollView, Dimensions, Image} from 'react-native';

let {width} = Dimensions.get('window');
width = width * 0.6;

const banners = [
  {
    id: 1,
    source: require('../assets/banners/banner1.png'),
  },
  {
    id: 2,
    source: require('../assets/banners/banner1.png'),
  },
  {
    id: 3,
    source: require('../assets/banners/banner1.png'),
  },
];
export function CarouselBanner() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center">
      {banners.map((banner) => (
        <Image
          key={banner.id}
          style={{
            width,
            height: 120,
            marginRight: 20,
            borderRadius: 10,
          }}
          source={banner.source}
        />
      ))}
    </ScrollView>
  );
}
