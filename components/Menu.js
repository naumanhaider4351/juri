import React from 'react'
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from './Header';

export const Menu = (props) => {
    const data = [
        {
          heading:"Birra 1",
          iconText:"€10.00",
        },
        {
          heading:"Birra 2",
          iconText:"€10.00",
        },
        {
          heading:"Birra 3",
          iconText:"€10.00",
        },
        {
          heading:"Birra 4",
          iconText:"€10.00",
        },
        {
          heading:"Birra 5",
          iconText:"€10.00",
        },
        {
          heading:"Birra 6",
          iconText:"€10.00",
        },
        {
          heading:"Birra 7",
          iconText:"€10.00",
        },
        {
          heading:"Birra 8",
          iconText:"€10.00",
        },
        {
          heading:"Birra 9",
          iconText:"€10.00",
        },
        {
          heading:"Birra 10",
          iconText:"€10.00",
        },
        {
          heading:"Birra 11",
          iconText:"€10.00",
        },
        {
          heading:"Birra 12",
          iconText:"€10.00",
        },
        {
          heading:"Birra 13",
          iconText:"€10.00",
        },
        {
          heading:"Birra 14",
          iconText:"€10.00",
        },
        {
          heading:"Birra 15",
          iconText:"€10.00",
        },
        {
          heading:"Birra 16",
          iconText:"€10.00",
        },
      ]
    
      const renderItem = ({item}) => {
        return (
          <>
            <View style={styles.listMain}>
              <TouchableOpacity
                style={styles.resturentList}
                onPress={() => props.navigation.navigate('Calendar')}>
                <View style={{flex: 1}}>
                  <View style={styles.resturentName}>
                    <Text style={{fontWeight: 'bold',fontSize:20,color: "#283835",}}>{item.heading}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={{marginRight: 8,fontSize:20,}}>{item.iconText}</Text>
                      <Ionicons name="information-circle-outline" size={30} color="#F43731" />
                    </View>
                  </View>
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
        <Header backgroundColor='#F43731' color='#fff' leftText="Indietro" middleText="Menu" />
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
  )
}


const styles = StyleSheet.create({
    listMain: {
      paddingHorizontal: 20,
      paddingVertical: 10,
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
  });