import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export const Header = (props) => {
  return (
    <>
        <View style={[styles.headerMain, {backgroundColor: props.backgroundColor}]}>
            <Text style={[{color:props.color}, styles.fontSize16, styles.minWidth33per]}>{props.leftText}</Text>
            <Text style={[{color:props.color}, styles.fontSize16, styles.minWidth33per, styles.textCenter]}>{props.middleText}</Text>
            <Text style={[{color:props.color}, styles.fontSize16, styles.minWidth33per, styles.textRight]}>{props.rightText}</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    headerMain: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fontSize16: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    minWidth33per: {
        flex: 1,
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
});