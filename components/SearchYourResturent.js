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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Header } from './Header';

import {SearchBar} from './SearchBar';

export const SearchYourResturent = props => {
  const data = [
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place1.jpg')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place2.jpeg')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place3.png')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place4.jpg')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place1.jpg')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place2.jpeg')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place3.png')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place4.jpg')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place.png')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place.png')
    },
    {
      heading:"Birrenia",
      text:"Via Indipendenza 1, Milano (MI)",
      iconText:"Visualizza",
      image:require('../src/img/place.png')
    },
  ]

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.listMain}>
              <TouchableOpacity
                style={styles.resturentList}
                onPress={() => props.navigation.navigate('Profile')}>
                <Image
                  style={styles.imageSet}
                  source={item.image}
                />
                <View style={{flex: 1}}>
                  <View style={styles.resturentName}>
                    <Text style={{fontWeight: 'bold'}}>{item.heading}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={{textAlign: 'center'}}>{item.iconText}</Text>
                      <MaterialIcons name="chevron-right" size={20} />
                    </View>
                  </View>
                  <Text>{item.text}</Text>
                </View>
              </TouchableOpacity>
            </View>
      </>
    )
  }
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#f3f3f3'} barStyle={'dark-content'} />
        <Header leftText="Indietro" middleText="Risultati Ricerca" />
        <SearchBar placeholder="🔍 Cosa stai cercando?" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          <FlatList
            style={{}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={data}
            renderItem={renderItem}
            />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  listMain: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  resturentList: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  resturentName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageSet: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    marginRight: 12,
  },
});
