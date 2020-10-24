/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/Layout';
import {FONT} from '../assets/style';
import {useRoute} from '@react-navigation/native';

const BlankScreen = () => {
  const route = useRoute();

  return (
    <Layout onRefresh={() => console.info('refresh')}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={[FONT.sectionTitle, {textAlign: 'center'}]}>
          {route.name}
        </Text>
        <Text style={[{textAlign: 'center'}]}>
          ~ Kita Lagi Siapin Fiturnya ~
        </Text>
      </View>
    </Layout>
  );
};

export default BlankScreen;
