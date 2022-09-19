import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Section} from '../components/Section';
import {SearchBar} from './SearchBar';

export const SearchYourPlace = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          backgroundColor={'#f3f3f3'}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <SearchBar />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <View
              style={{
                flex: 1,
              }}>
                {/* <Image source={require('./src/img/place.PNG')} /> */}
              </View>
            <View
              style={{
                flex: 1,
              }}></View>
          </View>   
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
