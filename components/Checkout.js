import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from './Header';
import {TimeAndDatePicker} from './TimeAndDatePicker';

export const Checkout = (props) => {
  const [isSelected, setSelection] = useState(false);
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
            onPress={() => props.navigation.navigate('Confirmation')}>
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
        <StatusBar backgroundColor={'#F43731'} barStyle={'light-content'} />
        <Header backgroundColor='#F43731' color='#fff' leftText="Indietro" middleText="Checkout" rightText="Paga" />
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
            <Text style={{fontSize: 16, marginBottom: 3, color: '#080904'}}>
              Dati di pagamento
            </Text>
            <TextInput
              style={[
                styles.nominativoInput,
                {flex: 1, width: '100%', marginBottom: 5},
              ]}
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
            <Text style={{fontSize: 16, marginBottom: 3, color: '#080904'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              placerat blandit auctor. Cras in pretium justo, et elementum eros.
              Aliquam erat volutpat. Donec in nisi nisi. Proin ultrices porta
              fermentum. Etiam egestas metus leo, vitae interdum libero finibus
              eu. Cras egestas elementum eros sit amet tincidunt. Sed congue
              egestas placerat. Suspendisse nisi nulla, rutrum sed eleifend a,
              fermentum sed magna. Vestibulum odio enim, aliquet id volutpat
              pellentesque, laoreet ac risus. Cras ac interdum lectus. Integer
              quis ornare elit.
            </Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Accetto i Temini e Condizioni</Text>
            </View>
            <View style={styles.resturentName}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                Totale
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                €35.00
              </Text>
            </View>
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
