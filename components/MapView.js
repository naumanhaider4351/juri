import React from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export const MapViewLayout = (props) => {
  return (
    <>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          // onRegionChangeComplete={async(e) =>
          // {
          //   console.log('Circle.onRegionChangeComplete()');
          //   return true;
          // }}
          style={styles.map}
          initialRegion={{
            latitude: 45.7993,
            longitude: 9.0927,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker draggable
              coordinate={{ latitude : 45.7993 , longitude : 9.0927 }}
              onDragEnd={async(e) => {props.navigation.navigate('SearchYourPlace')}}
            />
          </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });