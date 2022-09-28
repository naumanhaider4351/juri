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
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from './Header';
import {TimeAndDatePicker} from './TimeAndDatePicker';

export const Checkout = () => {
  const data = [
    {
      heading: 'Birra 1',
      iconText: '€10.00',
    },
    {
      heading: 'Birra 2',
      iconText: '€10.00',
    },
    {
      heading: 'Birra 3',
      iconText: '€10.00',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.listMain}>
          <TouchableOpacity
            style={styles.resturentList}
            onPress={() => props.navigation.navigate('Calendar')}>
            <View style={{flex: 1}}>
              <View style={styles.resturentName}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: '#283835'}}>
                  {item.heading}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{marginRight: 8, fontSize: 20}}>
                    {item.iconText}
                  </Text>
                  <Ionicons
                    name="information-circle-outline"
                    size={30}
                    color="skyblue"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#f3f3f3'} barStyle={'dark-content'} />
        <Header leftText="Indietro" middleText="Checkout" rightText="Paga" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          <Text
            style={{
              marginRight: 8,
              fontSize: 16,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            Riepilogo
          </Text>
          <FlatList
            style={{marginBottom: 20}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={data}
            renderItem={renderItem}
          />
          <View style={styles.pagamento}>
            <Text style={{fontSize: 16, marginBottom: 3,color: '#080904',}}>
              Dati di pagamento
            </Text>
            <TextInput
              style={[styles.nominativoInput, {flex: 1, width: '100%',marginBottom: 5}]}
              placeholder="Nomiro Carta"
            />
            <View style={styles.calendarFooterMain}>
              <View style={styles.cvc}>
                <TextInput
                  style={styles.nominativoInput}
                  placeholder="CVV/CVC"
                />
              </View>
              <View style={styles.nominativo}>
                <TextInput
                  style={styles.nominativoInput}
                  placeholder="Placeholder"
                />
              </View>
              <View style={styles.orario}>
                <TimeAndDatePicker mode="date" />
              </View>
            </View>
            <Text style={{fontSize: 16, marginBottom: 3, color: '#080904',}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat blandit auctor. Cras in pretium justo, et elementum eros. Aliquam erat volutpat. Donec in nisi nisi. Proin ultrices porta fermentum. Etiam egestas metus leo, vitae interdum libero finibus eu. Cras egestas elementum eros sit amet tincidunt. Sed congue egestas placerat. Suspendisse nisi nulla, rutrum sed eleifend a, fermentum sed magna. Vestibulum odio enim, aliquet id volutpat pellentesque, laoreet ac risus. Cras ac interdum lectus. Integer quis ornare elit.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
  calendarFooterMain: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  pagamento: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cvc: {
    flex: 1,
  },
  nominativo: {
    flex: 2,
    paddingHorizontal: 8,
  },
  nominativoInput: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  orario: {
    flex: 1,
  },
  timeMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  time: {
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  calendarIcon: {
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
});
