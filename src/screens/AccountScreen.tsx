/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/Layout';
import {FONT} from '../assets/style';

const AccountScreen = () => {
  return (
    <Layout>
      <View>
        <Text style={[FONT.title]}>Account</Text>
      </View>
    </Layout>
  );
};

export default AccountScreen;
