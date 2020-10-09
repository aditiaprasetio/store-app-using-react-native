/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ImagePropTypes,
} from 'react-native';
import Layout from '../components/Layout';
import {IPropsDashboard} from '../containers/dashboardContainer';
import {CarouselProduct} from '../components/CarouselProduct';
import {CarouselBanner} from '../components/CarouselBanner';

const DashboardScreen = (props: IPropsDashboard) => {
  return (
    <Layout menu="dashboard">
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Nike App Store</Text>
      </View>

      <View style={{marginTop: 30}}>
        <CarouselBanner />
      </View>

      <View style={{marginTop: 30}}>
        <CarouselProduct onClick={(data: any) => props.addToCart(data)} />
      </View>

      {/* <TouchableOpacity
        style={{marginTop: 15, padding: 10, backgroundColor: '#333'}}
        onPress={() =>
          props.addToCart({
            id: new Date().getTime(),
            name: 'Product',
            price: 1000000,
          })
        }>
        <Text style={{color: '#fff', textAlign: 'center'}}>ADD PRODUCT</Text>
      </TouchableOpacity> */}
    </Layout>
  );
};

export default DashboardScreen;
