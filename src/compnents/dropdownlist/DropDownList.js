import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Controller } from 'react-hook-form'
const DropDownList = () => {

  const [selected, setSelected] = useState("");
  const [gender1, setGender] = useState("")
  const data = [
    { key: '1', value: 'A+' },//disabled:true},
    { key: '2', value: 'B+' },
    { key: '3', value: 'AB+' },
    { key: '4', value: 'AB-' },//disabled:true},
    { key: '5', value: 'O+' },
    { key: '6', value: 'O-' },
    // {key:'7', value:'Drinks'},
  ]
  const gender = [
    { key: '1', value: 'Male' },
    { key: '2', value: 'Female' }
  ]

  return (

    <View style={[styles.container,]} >
      
      <SelectList
        // style={styles.list2}
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        placeholder="Select Blood Group"
        maxHeight={150}

      // onSelect={() => alert(selected)}
      // defaultOption={"none"}
      // dropdownShown={true}
      // dropdownStyles={}
      />
      
      <SelectList
        style={styles.list2}
        setSelected={(val) => setGender(val)}
        data={gender}
        save="value"
        placeholder="Select Gender"
      />

    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 5,
    // flex: 1,
    flexDirection: 'row',
    // flexWrap:'wrap',
    // justifyContent: 'space-around'

    // justifyContent: 'space-between',
    // paddingHorizontal: 16,
    // marginTop: 5,
    // marginBottom: 5,
    // padding:20,

  },
  list1: {
    // alignItems:'flex-start'
    // justifyContent: 'flex-start',
    // marginRight:5,
    // padding:20,
    // flex: 1
// alignSelf:'flex-start'
  },
  list2: {
    // flex: 1,
    // padding:20,
    // alignSelf:'flex-end'
  }
})

export default DropDownList;

// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

// const BloodGroupDropdown = () => {
//   const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);

//   const handleBloodGroupChange = (value) => {
//     setSelectedBloodGroup(value);
//   };

//   return (
//     <View >
//       <DropDownPicker
//        const items={[
//           { label: 'A+', value: 'A+' },
//           { label: 'A-', value: 'A-' },
//           { label: 'B+', value: 'B+' },
//           { label: 'B-', value: 'B-' },
//           { label: 'AB+', value: 'AB+' },
//           { label: 'AB-', value: 'AB-' },
//           { label: 'O+', value: 'O+' },
//           { label: 'O-', value: 'O-' },
//         ]}
//         defaultValue={selectedBloodGroup}
//         placeholder="Select Blood Group"
//         containerStyle={styles.dropdownContainer}
//         style={styles.dropdown}
//         itemStyle={styles.dropdownItem}
//         dropDownStyle={styles.dropdownList}
//         onChangeItem={(item) => handleBloodGroupChange(item.value)}
//         dropDownMaxHeight={200} // Adjust this value according to your needs
//         isVisible={true} // Ensures the dropdown list is always visible
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dropdownContainer: {
//     height: 40,
//     width: 200,
//     marginTop: 8,
//   },
//   dropdown: {
//     backgroundColor: '#fafafa',
//   },
//   dropdownItem: {
//     justifyContent: 'flex-start',
//   },
//   dropdownList: {
//     backgroundColor: '#fafafa',
//   },
// });

// export default BloodGroupDropdown;
