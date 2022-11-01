import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const [data, setData] = useState([]);
  const getData = async () => {
    let selectedCat = props.route.params.item?.CategoryName
   try {
    let response = await axios({
      url: `http://192.168.1.104:4000/api/v1/getSearchedCatHotelDetails?cat=`+selectedCat,
      method: "GET",
    });
setData(response?.data?.hotels);
console.log("==================================================================================response while Getting All selected Category", JSON.stringify(response?.data));
   } catch (error) {
   console.log('error',error) 
   }
  };
  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.listMain}>
              <TouchableOpacity
                style={styles.resturentList}
                onPress={() => 
                  props.navigation.navigate('Profile',{item:item._id})
                // props.navigation.navigate('Profile', {item: 'ji'})
                }>
                {console.log('++++++++++++++++++++++++++++++++++++++', item)}
                <Image
                  style={styles.imageSet}
                  source={item.imgUrl === "" ? require('../src/img/place2.jpeg') :item?.imgUrl}
                />
                <View style={{flex: 1}}>
                  <View style={styles.resturentName}>
                    <Text style={{fontWeight: 'bold'}}>{item.hotelName}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={{textAlign: 'center'}}>Visualizza</Text>
                      <MaterialIcons name="chevron-right" size={20} />
                    </View>
                  </View>
                  <Text>{item.hotelDetail}</Text>
                </View>
              </TouchableOpacity>
            </View>
      </>
    )
  }
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#F43731'} barStyle={'light-content'} />
        <Header backgroundColor="#fff" leftText="Indietro" middleText="Risultati Ricerca" />
        <SearchBar placeholder="🔍 Cosa stai cercando?" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          {data && data.length >= 1 ?
          <FlatList
            style={{}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={data}
            renderItem={renderItem}
            />
            :
            <Text>No Resturant Found</Text>
          }
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
    borderWidth:1,
    borderColor:'#000'
  },
});
