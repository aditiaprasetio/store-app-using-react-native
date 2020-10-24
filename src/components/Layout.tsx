import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  RefreshControl,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ICartState} from '../redux/reducers/cart';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LAYOUT} from '../assets/style';

type IPropsLayout = {
  cartData: ICartState;
  initial?: string;
  children: any;
  menu?: string;
  onRefresh: () => void;
};

const listMenu = [
  {
    key: 'Dashboard',
    icon: 'home-outline',
    icon_selected: 'home',
  },
  {
    key: 'Favorite',
    icon: 'heart-outline',
    icon_selected: 'heart',
  },
  {
    key: 'Account',
    icon: 'person-outline',
    icon_selected: 'person',
  },
];
function Layout(props: IPropsLayout) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />

      <View style={{flex: 1, zIndex: 10}}>
        {/** MAIN CONTENT */}
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}
          scrollEventThrottle={400}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => props.onRefresh()}
            />
          }
          showsVerticalScrollIndicator={false}>
          {props.children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps(state: any): Partial<IPropsLayout> {
  return {
    cartData: state.rootReducer.cartReducer,
  };
}

function mapDispatchToProps(dispatch: any): Partial<IPropsLayout> {
  return {};
}

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default LayoutContainer;
