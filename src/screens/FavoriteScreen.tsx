/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/Layout';
import {FONT} from '../assets/style';

const FavoriteScreen = () => {
  return (
    <Layout>
      <View>
        <Text style={[FONT.title]}>Favorite</Text>
      </View>
    </Layout>
  );
};

export default FavoriteScreen;
