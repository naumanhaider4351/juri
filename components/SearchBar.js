import * as React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export const SearchBar = (props) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.SearchBarMain}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={props.placeholder}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    SearchBarMain: {
        backgroundColor: "lightgrey",
    },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "white",
    textAlign: "center",
  },
});
