import React, {useState} from 'react';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import {Header} from './Header';
import Arrow from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Counter} from './Counter';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TimeAndDatePicker } from './TimeAndDatePicker';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today',
};
LocaleConfig.defaultLocale = 'fr';

export const CalendarScreen = props => {
  const minDate = new Date();
  const [day, setDay] = useState(new Date().toLocaleDateString());
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
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#f3f3f3'} barStyle={'dark-content'} />
        <Header leftText="Indietro" middleText="Prenota" rightText="Prenota" />
        <ScrollView>
          <Calendar
            // Initially visible month. Default = now
            initialDate={minDate}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // minDate={minDate}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2023-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              setDay(day.dateString);
              props.navigation.navigate('Checkout')
              console.log('selected day', day);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={direction => {
              if (direction == 'left')
                return <Arrow name="caretleft" size={15} />;
              if (direction == 'right')
                return <Arrow name="caretright" size={15} />;
            }}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={false}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={false}
            // Replace default month and year title with custom one. the function receive a date as parameter
            renderHeader={date => {
              /*Return JSX*/
            }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            headerStyle={
              {
                // backgroundColor: 'red'
              }
            }
            useIsoWeekday={true}
            updateWeek={true}
            selectedDate={new Date()}
            renderHeader={date => {
              return (
                <View>
                  <Text style={{textAlign: 'center', color: 'black'}}>
                    {console.log(date, 'date is here')}
                    {day}
                  </Text>
                </View>
              );
            }}
            theme={{
              backgroundColor: '#fff',
              calendarBackground: '#fff',
              textSectionTitleColor: '#000',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: 'skyblue',
              todayTextColor: '#fff',
              todayBackgroundColor: '#2d4150',
              dayTextColor: 'grey',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: '',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
              weekVerticalMargin: 25,
            }}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
            }}
          />
          <View style={styles.calendarFooterMain}>
            <View style={styles.personi}>
              <Text style={{fontSize: 16, marginBottom: 3}}>Persone</Text>
              <Counter />
            </View>
            <View style={styles.nominativo}>
              <Text style={{fontSize: 16, marginBottom: 3}}>Nominativo</Text>
              <TextInput
                style={styles.nominativoInput}
                placeholder="Placeholder"
              />
            </View>
            <View style={styles.orario}>
              <Text style={{fontSize: 16, marginBottom: 3}}>Orario</Text>
              <TimeAndDatePicker mode="time" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  calendarFooterMain: {
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  personi: {
    flex: 1,
  },
  nominativo: {
    flex: 2,
  },
  nominativoInput: {
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
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
