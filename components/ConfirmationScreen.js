import React from 'react';
import {Header} from './Header';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';

export const ConfirmationScreen = () => {
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#F43731'} barStyle={'light-content'} />
        <Header backgroundColor='#F43731' color='#fff' leftText="Indietro" middleText="Checkout" />
          <View style={styles.confirmationMain}>
            <Image
              source={require('../src/img/confirmationCheck.png')}
              style={styles.imageSet}
              resizeMode="cover"
            />
            <Text style={{fontWeight: 'bold', fontSize: 22,}}>Pagamento Confermato!</Text>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  confirmationMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  imageSet: {
    width: 150,
    height: 150,
    borderRadius: 1000,
    marginBottom: 20,
  },
});
