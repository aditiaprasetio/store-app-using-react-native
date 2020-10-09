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
import {IconMenuClose} from './IconMenuClose';
import {ICartState} from '../redux/reducers/cart';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LAYOUT} from '../assets/style';

type IPropsLayout = {
  cartData: ICartState;
  initial?: string;
  children: any;
  menu?: string;
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
      <StatusBar backgroundColor="#333333" barStyle="light-content" />

      {/** BACKGROUND ROUNDED */}
      <View style={LAYOUT.background_rounded}></View>

      <View style={{flex: 1, zIndex: 10}}>
        {/** HEADER */}
        <View style={LAYOUT.header}>
          <View style={{flexShrink: 1}}>
            <IconMenuClose />
          </View>
          <View style={{flexShrink: 1}}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: '#f27d79',
                paddingHorizontal: 5,
                zIndex: 10,
                right: 0,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 10, color: '#ffffff'}}>
                {props.cartData.list.length}
              </Text>
            </View>
            <Ionicons name="cart" size={30} color="#444" />
          </View>
        </View>

        {/** MAIN CONTENT */}
        <ScrollView
          contentContainerStyle={{flexGrow: 1, padding: 15}}
          scrollEventThrottle={400}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => console.info('refresh')}
            />
          }
          showsVerticalScrollIndicator={false}>
          {props.children}
        </ScrollView>

        {/** BOTTOM TAB */}
        <View style={LAYOUT.bottom_menu}>
          {listMenu.map((menu, key) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(menu.key)}
                key={menu.key}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  // backgroundColor: '#f2f2f2',
                  padding: 10,
                  justifyContent: 'center',
                }}>
                {route.name === menu.key ? (
                  <Ionicons
                    name={menu.icon_selected}
                    size={30}
                    style={[
                      key === 0
                        ? {alignSelf: 'flex-start'}
                        : key === listMenu.length - 1
                        ? {alignSelf: 'flex-end'}
                        : {},
                    ]}
                  />
                ) : (
                  <Ionicons
                    name={menu.icon}
                    size={30}
                    style={[
                      key === 0
                        ? {alignSelf: 'flex-start'}
                        : key === listMenu.length - 1
                        ? {alignSelf: 'flex-end'}
                        : {},
                    ]}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
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
