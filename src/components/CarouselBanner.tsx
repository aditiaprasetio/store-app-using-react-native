import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, Dimensions, Image, View, FlatList} from 'react-native';

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
  const [selected, setSelected] = useState(1);
  const onScroll = (event: any) => {
    setSelected(Math.floor(event.nativeEvent.contentOffset.x / 179));
  };

  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={onScroll}
        snapToEnd
        scrollEventThrottle={1000}>
        {banners.map((banner, key) => (
          <View key={key}>
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
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginTop: 5,
        }}>
        {banners.map((banner, key) => (
          <View
            key={key}
            style={{
              width: 10,
              height: 10,
              margin: 5,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#444444',
              backgroundColor: selected === key ? '#444444' : '#ffffff',
            }}></View>
        ))}
      </View>
    </>
  );
}
