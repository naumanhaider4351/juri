import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const TimeAndDatePicker = (props) => {
  const [time, setTime] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setTime(date.getUTCHours() + ':' + date.getUTCMinutes());
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <>
      <View style={styles.timeMain}>
        <Text style={styles.time}>{time}</Text>
        <MaterialCommunityIcons
          name="calendar-range"
          size={15}
          onPress={showDatePicker}
          style={styles.calendarIcon}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={props.mode}
        // mode="time"
        onConfirm={e => handleConfirm(e)}
        onCancel={hideDatePicker}
      />
    </>
  );
};

const styles = StyleSheet.create({
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
    height: 38,
  },
  calendarIcon: {
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
