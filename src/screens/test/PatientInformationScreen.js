import React, { useState } from 'react';
import { View, Text, Picker, TextInput, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
const PatientInformationScreen = ({ route, navigation }) => {
  const { disease } = route.params;
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [requiredBloodDate, setRequiredBloodDate] = useState('');
  const [description, setDescription] = useState('');
  const [otherRequirements, setOtherRequirements] = useState('');

  const handleSubmit = () => {
    const patientInfo = {
      disease,
      patientName,
      contactNumber,
      address,
      bloodGroup,
      requiredBloodDate,
      description,
      otherRequirements,
    };

    navigation.navigate('Confirmation', { patientInfo });
  };

  return (
    <View>
      <Text>Patient Information Screen</Text>
      <Text>Disease: {disease}</Text>
      <TextInput
        placeholder="Patient Name"
        value={patientName}
        onChangeText={setPatientName}
      />
      <TextInput
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Picker
        selectedValue={bloodGroup}
        onValueChange={(itemValue) => setBloodGroup(itemValue)}
      >
        <Picker.Item label="Select Blood Group" value="" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        {/* Add more blood group options */}
      </Picker>
      <TextInput
        placeholder="Required Blood Date"
        value={requiredBloodDate}
        onChangeText={setRequiredBloodDate}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Other Requirements"
        value={otherRequirements}
        onChangeText={setOtherRequirements}
      />
      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
};

export default PatientInformationScreen;
