import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardContainer from '../containers/dashboardContainer';
import AccountScreen from '../screens/AccountScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={DashboardContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
