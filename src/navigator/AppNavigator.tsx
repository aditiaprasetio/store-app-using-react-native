import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardContainer from '../containers/dashboardContainer';
import BlankScreen from '../screens/BlankScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          tabBarIcon: ({focused, color, size}: any) => {
            let iconName;

            let iconType = null;
            if (route.name === 'Jelajahi') {
              iconType = 'entypo';
              iconName = focused ? 'shop' : 'shop';
            } else if (route.name === 'Peta Toko') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Pesanan') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Riwayat') {
              iconName = focused ? 'receipt' : 'receipt-outline';
            }

            // You can return any component that you like here!
            if (iconType === 'entypo') {
              return <Entypo name={iconName} size={size} color={color} />;
            } else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
        })}>
        <Tab.Screen name="Jelajahi" component={DashboardContainer} />
        <Tab.Screen name="Peta Toko" component={BlankScreen} />
        <Tab.Screen name="Favorite" component={BlankScreen} />
        <Tab.Screen name="Pesanan" component={BlankScreen} />
        <Tab.Screen name="Riwayat" component={BlankScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
