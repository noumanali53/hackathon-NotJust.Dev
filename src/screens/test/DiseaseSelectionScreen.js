import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DiseaseSelectionScreen = ({ navigation }) => {
  const handleDiseaseSelection = (disease) => {
    navigation.navigate('PatientInformation', { disease });
  };

  return (
    <View>
      <Text>Disease Selection Screen</Text>
      <TouchableOpacity onPress={() => handleDiseaseSelection('Some Disease')}>
        <Text>Some Disease</Text>
      </TouchableOpacity>
      {/* Add more TouchableOpacity components for other diseases */}
    </View>
  );
};

export default DiseaseSelectionScreen;
