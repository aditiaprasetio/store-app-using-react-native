import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header(props: any) {
  return (
    <View style={{height: 250}}>
      <View style={{flexDirection: 'row', zIndex: 10, padding: 20}}>
        <View style={{flexShrink: 1}}>
          <Ionicons name="ios-home" size={25} color="#ffffff" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name="location"
            size={20}
            color="#ffffff"
            style={{marginRight: 10}}
          />
          <Text style={{color: '#ffffff', fontSize: 15}}>
            Kec. Mertoyudan, Magelang{' '}
          </Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color="#ffffff"
            style={{marginLeft: 5}}
          />
        </View>
      </View>
      <Image
        source={require('../assets/banners/banner1.jpg')}
        style={{position: 'absolute', zIndex: 0, height: 250}}
        resizeMode="cover"
      />

      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 10,
          marginVertical: 5,
          marginHorizontal: 20,
          paddingHorizontal: 5,
          flexDirection: 'row',
          alignItems: 'center',
          height: 40,
        }}>
        <Ionicons
          name="search"
          size={20}
          color="grey"
          style={{marginLeft: 10, marginRight: 5}}
        />
        <TextInput
          placeholder="Hari ini mau makan apa?"
          placeholderTextColor="grey"
          style={{fontSize: 12, width: '100%'}}
          onChangeText={(text) => props.onSearch(text)}
        />
      </View>
    </View>
  );
}
