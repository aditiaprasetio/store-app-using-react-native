/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Layout from '../components/Layout';
import {IPropsDashboard} from '../containers/dashboardContainer';
import {CarouselProduct} from '../components/CarouselProduct';
import {CarouselBanner} from '../components/CarouselBanner';
import {FONT} from '../assets/style';

const DashboardScreen = (props: IPropsDashboard) => {
  return (
    <Layout>
      <View>
        <Text style={[FONT.title]}>Nike App Store</Text>
      </View>

      <View style={{marginTop: 50}}>
        <CarouselBanner />
      </View>

      <View style={{marginTop: 50}}>
        <CarouselProduct onClick={(data: any) => props.addToCart(data)} />
      </View>
    </Layout>
  );
};

export default DashboardScreen;
