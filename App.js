/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchYourPlace} from './components/SearchYourPlace';
import {SearchYourResturent} from './components/SearchYourResturent';
import {Profile} from './components/Profile';
import {Menu} from './components/Menu';
import {CalendarScreen} from './components/Calendar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Checkout } from './components/Checkout';
import { ConfirmationScreen } from './components/ConfirmationScreen';
import { MapViewLayout } from './components/MapView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MapViewLayout" component={MapViewLayout} />
          <Stack.Screen name="SearchYourPlace" component={SearchYourPlace} />
          <Stack.Screen
            name="SearchYourResturent"
            component={SearchYourResturent}
          />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
          <Stack.Screen name="Profile">
            {props => <MyTabs {...props} />}
          </Stack.Screen>
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
          {/* <Stack.Screen name="Menu" component={Menu} /> */}
          {/* <Stack.Screen name="Calendar" component={CalendarScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator

    style={{backgroundColor: 'red'}}
      screenOptions={{
        // tabBarStyle: { backgroundColor: Colors.lightRoyalBlue,borderTopColor:Colors.trasparent, height: Platform.OS === 'ios' ? 75 : 60, },
        tabBarStyle: {height: 60, backgroundColor: '#F7F5F6'},
        tabBarLabelStyle: {marginBottom: 5},
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Protio',
          tabBarIcon: ({focused}) => (
            <Foundation
              name="torsos-male-female"
              size={30}
              color={focused ? '#3371E0' : ''}
              style={{marginTop: 8}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarLabel: 'Menu',
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="file-text-o"
              size={25}
              color={focused ? '#3371E0' : ''}
              style={{marginTop: 8}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Prenota',
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="star-o"
              size={25}
              color={focused ? '#3371E0' : ''}
              style={{marginTop: 8}}
            />
          ),
        }}
      />
      {/* <Tab.Screen name="HelpScreen" component={Help} options={{
              headerShown: false,
              tabBarLabel:'Help',
              // tabBarIcon: ({ focused }) => (
              //     <Ionicons name="help-circle" size={34} color={focused ? Colors.lightBlue :Colors.royalGrey} style={{marginTop:1}}/>
              // ),
          }}
          /> */}
    </Tab.Navigator>
  );
}

export default App;
