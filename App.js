/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResturentDetail } from './components/ResturentDetail';
import {SearchYourPlace} from './components/SearchYourPlace';
import { SearchYourResturent } from './components/SearchYourResturent';

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchYourPlace" component={SearchYourPlace} />
        <Stack.Screen name="SearchYourResturent" component={SearchYourResturent} />
        <Stack.Screen name="ResturentDetail" component={ResturentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
