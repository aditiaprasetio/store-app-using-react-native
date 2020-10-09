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

type IPropsLayout = {
  cartData: ICartState;
  initial?: string;
  children: any;
  menu?: string;
};

const listMenu = [
  {
    key: 'dashboard',
    icon: 'home-outline',
    icon_selected: 'home',
  },
  {
    key: 'favorite',
    icon: 'heart-outline',
    icon_selected: 'heart',
  },
  {
    key: 'account',
    icon: 'person-outline',
    icon_selected: 'person',
  },
];
function Layout(props: IPropsLayout) {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Platform.OS === 'ios' ? '#f2f2f2' : '',
      }}>
      <StatusBar backgroundColor="#333333" barStyle="light-content" />

      {/** BACKGROUND ROUNDED */}
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#f2f2f2',
          borderTopRightRadius: 250,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}></View>

      <View style={{flex: 1, zIndex: 10}}>
        {/** HEADER */}
        <View
          style={{
            height: 40,
            // backgroundColor: '#f2f2f2',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            padding: 10,
          }}>
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
          contentContainerStyle={{flexGrow: 1, padding: 10}}
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
        <View
          style={[
            {
              position: 'absolute',
              flexDirection: 'row',
              height: 50,
              width: '100%',
              // backgroundColor: '#f2f2f2',
              bottom: 0,
              justifyContent: 'space-between',
            },
          ]}>
          {listMenu.map((menu, key) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedMenu(menu.key)}
                key={menu.key}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  // backgroundColor: '#f2f2f2',
                  padding: 10,
                  justifyContent: 'center',
                }}>
                {selectedMenu === menu.key ? (
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
