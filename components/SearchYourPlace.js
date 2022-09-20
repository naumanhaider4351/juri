import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
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
  
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor={'#f3f3f3'}
          barStyle={'dark-content'}
        />
        <SearchBar placeholder="🔍 Di cosa hai bisogno?" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Posto Auto</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Birrenia</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Food Delivery</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Elettricista</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Hotel</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Noleggio Auto</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Bar</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>B&B</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Posto Auto</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Birrenia</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Food Delivery</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Elettricista</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Hotel</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Noleggio Auto</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>Bar</Text>
            </View>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
              }}>
              <Image source={require('../src/img/place.png')} />
              <Text style={{textAlign: 'center'}}>B&B</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});
