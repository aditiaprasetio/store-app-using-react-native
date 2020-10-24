import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {FONT} from '../assets/style';
import {IStore} from '../interfaces/store.interface';

interface IProps {
  data: IStore[];
}

export default function StoreBranch(props: IProps) {
  return (
    <View style={{padding: 10}}>
      <Text style={FONT.sectionTitle}>Cabang Toko</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row', padding: 10}}>
        {props.data.map((store, index) => (
          <View
            key={index}
            style={{
              width: 110,
              height: 100,
              alignItems: 'center',
              backgroundColor: '#ffffff',
              shadowRadius: 10,
              shadowColor: '#333',
              elevation: 2,
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Image
              source={
                store.store_logo
                  ? {uri: store.store_logo}
                  : require('../assets/damogo_bowl_icon.png')
              }
              style={{width: 30, height: 30}}
            />
            <Text style={{textAlign: 'center'}}>{store.store_business}</Text>

            <View
              style={{
                backgroundColor: '#00A3E0',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                padding: 3,
              }}>
              <Text style={{textAlign: 'center', color: '#ffffff'}}>
                {store.total_branch} toko
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
