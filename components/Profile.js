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
import {AirbnbRating} from 'react-native-ratings';
import { Header } from './Header';

export const Profile = ({navigation,route}) => {
  // const [resturantProdDetail,setResturantProdDetails]= useState(route.params.products || [])
  useEffect(()=>{
    // const {item}= route.params
    console.log(route)
// console.log(route.params.item)
  },[])
  // console.log(resturantProdDetail)

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Menu') } style={{width:'33%',padding:5,}}>
          <Image source={item.image} style={{width:'100%', }} height={110} resizeMode='cover' />
        </TouchableOpacity>
      </>
    )
  }
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#F43731'} barStyle={'light-content'} />
        <Header backgroundColor='#F43731' color='#fff' leftText="Indietro" middleText="Birreria" />
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
                source={require('../src/img/place1.jpg')}
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
                <Text style={{color: '#F43731'}}>Ordina</Text>
              </View>
            </View>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin nec orci id mattis. Praesent leo neque, faucibus ac elementum quis, eleifend sed ex.</Text>
            <View
            style={{
              width: '100%',
              flex: 1,
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
                alignItems: 'center',
            }}></View>

            <FlatList
            // style={styles.flatListStyle}
            style={{marginLeft: 0,alignSelf:'center'}}
            // horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
              data={[
                {
                  image:require('../src/img/place1.jpg')
                },
                {
                  image:require('../src/img/place2.jpeg')
                },
                {
                  image:require('../src/img/place3.png')
                },
                {
                  image:require('../src/img/place4.jpg')
                },
                {
                  image:require('../src/img/place1.jpg')
                },
                {
                  image:require('../src/img/place2.jpeg')
                },
                {
                  image:require('../src/img/place3.png')
                },
                {
                  image:require('../src/img/place4.jpg')
                },
                {
                  image:require('../src/img/place1.jpg')
                }
              ]}
              renderItem={renderItem}
            />
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
