import React from 'react';
import { View, Text, Button } from 'react-native';

const ConfirmationScreen = ({ route, navigation }) => {
  const { patientInfo } = route.params;

  const handleEdit = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    // Implement the submission logic
    navigation.navigate('Submission');
  };

  return (
    <View>
      <Text>Confirmation Screen</Text>
      <Text>Disease: {patientInfo.disease}</Text>
      <Text>Patient Name: {patientInfo.patientName}</Text>
      <Text>Contact Number: {patientInfo.contactNumber}</Text>
      <Text>Address: {patientInfo.address}</Text>
      <Text>Blood Group: {patientInfo.bloodGroup}</Text>
      <Text>Required Blood Date: {patientInfo.requiredBloodDate}</Text>
      <Text>Description: {patientInfo.description}</Text>
      <Text>Other Requirements: {patientInfo.otherRequirements}</Text>
      <Button title="Edit" onPress={handleEdit} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ConfirmationScreen;
