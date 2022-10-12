import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {SearchBar} from './SearchBar';

export const ResturentDetail = () => {

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate('SearchYourResturent')
                // }
                >
                <Image source={require('../src/img/place.png')} style={{width:100, height: 100,}} />
              </TouchableOpacity>
      </>
    )
  }
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#f3f3f3'} barStyle={'dark-content'} />
        <SearchBar placeholder="🔍 Cosa stai cercando?" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              width: '100%',
              flex: 1,
              padding: 24,
            }}>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Via Roma 42, Roma (RM)</Text>
                <AirbnbRating
                  reviews={[]}
                  reviewSize={0}
                  size={12}
                  count="5"
                  // selectedColor=""
                  // unSelectedColor={""}
                  tintColor="red"
                  ratingBackgroundColor="red"
                  ratingTextColor="red"
                  ratingCount={1}
                  ratingContainerStyle="none"
                  startingValue={0}
                  ratingColor={"red"}
                  type="bell"
                  reviewColor="red"
                  // starContainerStyle={{justifyContent: 'flex-start',alignItems: 'flex-start',}}
                  ratingContainerStyle={{justifyContent: 'flex-start',alignItems: 'flex-start',marginTop: -21, marginBottom: -2,}}
                />
                <Text style={{color: 'skyblue'}}>Ordina</Text>
              </View>
            </View>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin nec orci id mattis. Praesent leo neque, faucibus ac elementum quis, eleifend sed ex.</Text>
            
            <FlatList
            style={styles.flatListStyle}
              data={[
                '../src/img/place.png','../src/img/place.png','../src/img/place.png','../src/img/place.png'
              ]}
              renderItem={renderItem}
            />
            
            <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                flex: 1,
                padding: 8,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate('SearchYourResturent')
                // }
                >
                <Image source={require('../src/img/place.png')} style={{width:100, height: 100,}} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                padding: 8,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate('SearchYourResturent')
                // }
                >
                <Image source={require('../src/img/place.png')} style={{width:100, height: 100,}} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                padding: 8,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate('SearchYourResturent')
                // }
                >
                <Image source={require('../src/img/place.png')} style={{width:100, height: 100,}} />
              </TouchableOpacity>
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
                flex: 1,
                padding: 8,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate('SearchYourResturent')
                // }
                >
                <Image source={require('../src/img/place.png')} style={{width:100, height: 100,}} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                padding: 8,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate('SearchYourResturent')
                // }
                >
                <Image source={require('../src/img/place.png')} style={{width:100, height: 100,}} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                padding: 8,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() =>
                //   props.navigation.navigate('SearchYourResturent')
                // }
                >
                <Image source={require('../src/img/place.png')} style={{width:100, height: 100,}} />
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  listMain: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  imageSet: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    marginRight: 12,
  },
  flatListStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40
  }
});
