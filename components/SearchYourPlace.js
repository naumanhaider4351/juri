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

import {SearchBar} from './SearchBar';

export const SearchYourPlace = props => {
  const data = [
    {
      text:"Posto Auto",
      image:require('../src/img/place1.jpg')
    },
    {
      text:"Birrenia",
      image:require('../src/img/place2.jpeg')
    },
    {
      text:"Food Delivery",
      image:require('../src/img/place3.png')
    },
    {
      text:"Elettricista",
      image:require('../src/img/place4.jpg')
    },
    {
      text:"Hotel",
      image:require('../src/img/place1.jpg')
    },
    {
      text:"Noleggio Auto",
      image:require('../src/img/place2.jpeg')
    },
    {
      text:"Bar",
      image:require('../src/img/place3.png')
    },
    {
      text:"B&B",
      image:require('../src/img/place4.jpg')
    },{
      text:"Posto Auto",
      image:require('../src/img/place.png')
    },
    {
      text:"Birrenia",
      image:require('../src/img/place.png')
    },
    {
      text:"Food Delivery",
      image:require('../src/img/place.png')
    },
    {
      text:"Elettricista",
      image:require('../src/img/place.png')
    },
    {
      text:"Hotel",
      image:require('../src/img/place.png')
    },
    {
      text:"Noleggio Auto",
      image:require('../src/img/place.png')
    },
    {
      text:"Bar",
      image:require('../src/img/place.png')
    },
    {
      text:"B&B",
      image:require('../src/img/place.png')
    }
  ]

  const renderItem = ({item}) => {
    return (
      <>
        <View
          style={{
            // width: '100%',
            flex:1,
            alignItems: 'center',
            paddingTop: 12,
            paddingBottom: 12,
          }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('SearchYourResturent')
            }>
            <Image style={styles.imageSet} source={item.image} />
            <Text style={{textAlign: 'center'}}>{item.text}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#f3f3f3'} barStyle={'dark-content'} />
        <SearchBar placeholder="🔍 Di cosa hai bisogno?" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          <FlatList
            style={{}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={renderItem}
            />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({
  imageSet: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
});
