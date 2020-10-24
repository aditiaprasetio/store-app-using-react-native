import React from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import {FONT} from '../assets/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IStore} from '../interfaces/store.interface';

const listStores = [
  {
    name: 'Warung Steak and Shake',
    image: require('../assets/stores/store-a1.png'),
    total_store: 100,
  },
  {
    name: 'Bale Bakaran',
    image: require('../assets/stores/store-a2.png'),
    total_store: 10,
  },
  {
    name: 'Warung Steak and Shake',
    image: require('../assets/stores/store-a1.png'),
    total_store: 100,
  },
  {
    name: 'Warung Steak and Shake',
    image: require('../assets/stores/store-a1.png'),
    total_store: 100,
  },
  {
    name: 'Bale Bakaran',
    image: require('../assets/stores/store-a2.png'),
    total_store: 10,
  },
  {
    name: 'Warung Steak and Shake',
    image: require('../assets/stores/store-a1.png'),
    total_store: 100,
  },
];

interface IProps {
  data: IStore[];
}

export default function ListStore(props: IProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{flexDirection: 'row', padding: 10}}>
      {props.data.map((store, index) => (
        <View
          key={index}
          style={{
            width: 0.8 * Dimensions.get('window').width,
            height: 165,
            backgroundColor: '#ffffff',
            shadowRadius: 10,
            shadowColor: '#333',
            elevation: 2,
            borderRadius: 10,
            marginRight: 10,
            marginBottom: 5,
          }}>
          <Image
            source={
              store.store_image
                ? {uri: store.store_image}
                : require('../assets/noFoodPic.png')
            }
            style={{
              width: '100%',
              height: 100,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />

          <View style={{padding: 10, flexDirection: 'row'}}>
            <View style={{flexGrow: 1}}>
              <Text style={{fontSize: 14, textAlign: 'left'}}>
                {store.store_name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image
                  source={require('../assets/icons/food.png')}
                  style={{width: 10, height: 10, marginRight: 8}}
                />
                <Text style={{marginRight: 10, color: '#AAAAAA'}}>
                  {store.num_offers}
                </Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={{width: 10, height: 10, marginRight: 8}}
                />
                <Text style={{marginRight: 10, color: '#FFBB00'}}>
                  {store.num_reviews} (3)
                </Text>
                <Image
                  source={require('../assets/icons/delivery.png')}
                  style={{width: 10, height: 10, marginRight: 8}}
                />
                <Text style={{marginRight: 10, color: '#AAAAAA'}}>
                  {store.delivery_price}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexShrink: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
              }}>
              <Ionicons
                name={store.isFav ? 'heart' : 'heart-outline'}
                size={30}
                color="#FF4A4A"
                style={{marginRight: 5}}
              />
              <Text style={{color: '#FF4A4A'}}>3</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
