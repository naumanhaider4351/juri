import React, { useEffect, useState } from "react";

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
import axios from "axios";

export const SearchYourPlace = props => {
  // const img = [
  //   {
  //     text:"Posto Auto",
  //     image:require('../src/img/place1.jpg')
  //   },
  //   {
  //     text:"Bar",
  //     image:require('../src/img/place3.png')
  //   },
  //   {
  //     text:"B&B",
  //     image:require('../src/img/place4.jpg')
  //   }
  // ]

  const [data, setData] = useState([]);
  const getData = async () => {
   try {
    let response = await axios({
      url: `http://192.168.1.104:4000/api/v1/getAllCategory`,
      method: "GET",
      
    });
setData(response?.data?.hotels);
console.log("==================================================================================response while Getting All Category", JSON.stringify(response?.data));
   } catch (error) {
   console.log('error',error) 
   }
  };
  useEffect(() => {
    getData();
  }, []);

  // useEffect = async code => {
  //   let response = await Axios({
  //     url: `http://localhost:4000/api/v1/getAllCategory`,
  //     method: "GET",
  //     params: {
  //       'cat': search
  //     },
  //   });
  //   console.log("response while Getting All Category", JSON.stringify(response?.data));
  // }

  const renderItem = ({item}) => {
    return (
      <>
      
        <View
          style={{
            width: '50%',
            alignItems: 'center',
            paddingTop: 12,
            paddingBottom: 12,
          }}>
          <TouchableOpacity
          style={{
            flex:1,
          }}
            onPress={() =>
              props.navigation.navigate('SearchYourResturent',{item:item})
            }>
            <Image style={styles.imageSet} source={item?.imgUrl === "" ? require('../src/img/place4.jpg') :item?.imgUrl } />
            <Text style={{textAlign: 'center'}}>{item?.CategoryName}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#F43731'} barStyle={'light-content'} />
        <SearchBar placeholder="🔍 Di cosa hai bisogno?" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          {data && data.length >= 1 ?
          <FlatList
            style={{}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={renderItem}
            />
            :
            <Text>No Category Here</Text>
          }
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
    borderWidth:1,
    borderColor:'#000'
  },
});