import React, {useState} from 'react';
import {Button, Text, View,StyleSheet, TextInput} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';

export const Counter = () => {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if(count === "" || count === undefined){
        setCount(0)
        setCount(prevCount => prevCount + 1);
    }
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <>
      <View style={styles.counterMain}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.buttonMain}>
            <Arrow style={[styles.counterBtn, styles.borderTopRight]} onPress={handleIncrement} name="caretup" size={8} />
            <Arrow style={[styles.counterBtn, styles.borderBottomRight]} onPress={!count <= 0 ? handleDecrement : null} name="caretdown" size={8} />
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    counterMain: {
        flexDirection: 'row',
        width: '70%',
    },
    count: {
        flex: 2,
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 8,
        fontSize: 16,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    buttonMain: {
      flex: 1.5,
    },
    counterBtn: {
      backgroundColor: '#EBEBEB',
      padding: 5,
      borderWidth: 1,
      textAlign: 'center',
    },
    borderTopRight: {
      borderTopRightRadius: 4,
    },
    borderBottomRight: {
      borderBottomRightRadius: 4,
    },
  });