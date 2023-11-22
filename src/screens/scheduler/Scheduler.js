import React, { useState } from 'react'
import {ScrollView, Button, DatePickerIOS, DatePickerAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Scheduler = () => {


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>

      <Text style={styles.title}>Set Reminder</Text>
      <Text>Enter Your Last Donated Date </Text>


      </View>
      </ScrollView>  
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#880808',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default Scheduler


// // React Native Date Picker – To Pick the Date using Native Calendar
// // https://aboutreact.com/react-native-datepicker/

// // import React in our code
// import React, { useState } from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// //import DatePicker from the package we installed
// import DatePicker from 'react-native-datepicker';

// const Scheduler = () => {
//   const [date, setDate] = useState('09-10-2020');

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.title}>
//           React Native Date Picker –
//           To Pick the Date using Native Calendar
//         </Text>
//         <DatePicker
//           style={styles.datePickerStyle}
//           date={date} // Initial date from state
//           mode="date" // The enum of date, datetime and time
//           placeholder="select date"
//           format="DD-MM-YYYY"
//           minDate="01-01-2016"
//           maxDate="01-01-2019"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           customStyles={{
//             dateIcon: {
//               //display: 'none',
//               position: 'absolute',
//               left: 0,
//               top: 4,
//               marginLeft: 0,
//             },
//             dateInput: {
//               marginLeft: 36,
//             },
//           }}
//           onDateChange={(date) => {
//             setDate(date);
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//   },
//   datePickerStyle: {
//     width: 200,
//     marginTop: 20,
//   },
// });

// export default Scheduler;

