import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form'
import CustomInput from '../../compnents/custominput/CustomInput';
import CustomButton from '../../compnents/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import DropDownList from '../../compnents/dropdownlist/DropDownList';
import ProfilePictureUploader from '../../compnents/picture/Picture';


const DonorProfile = () => {
  const navigation = useNavigation();

  const { control,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const Register = () => {
    // Perform the necessary actions to submit the user profile
    // You can make an API call or handle the profile locally
    // Access the form data from the state variables

    // Reset the form after submission
    navigation.navigate("Dashboard")

  };

  return (
    <View style={styles.root}>

      <ProfilePictureUploader />
      
      
      <CustomInput
        control={control}
        name='patietn name'
        placeholder="Enter Patient Name"
        rules={{
          required: 'Provide Valide Name',
        }}
      />

      <CustomInput
        name="CNIC"
        placeholder="CNIC Number"
        control={control}
        keyboard='number-pad'
        rules={{
          required: 'Provide Valid CNIC',
          minLength: {
            value: 13
          }
        }}
      />

      <CustomInput
        name="Phone Number "
        placeholder="03XXXXXXXXX"
        control={control}
        keyboard='number-pad'
        rules={{
          required: 'Provide Valid Phone Number',
          minLength: {
            value: 11
          }
        }}
      />
      <DropDownList />
      <CustomInput
        name="Age"
        control={control}
        placeholder="Enter Age"
        keyboard="number-pad"


        rules={{
          required: 'Enter Age',

          maxLength: {
            value: 2,
          }
        }}
      /> 
     
     
     
         

      {/* <Text>CNIC No</Text>
      <TextInput
        value={cnicNo}
        onChangeText={setCnicNo}
        placeholder="Enter CNIC number"
        keyboardType="numeric"
      />

      <Text>Contact Number</Text>
      <TextInput
        value={contactNumber}
        onChangeText={setContactNumber}
        placeholder="Enter contact number"
        keyboardType="numeric"
      />

      <Text>Date of Birth</Text>
      <TextInput
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="Enter date of birth"
      />

      <Text>Age</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      <Text>Gender</Text>
      <TextInput
        value={gender}
        onChangeText={setGender}
        placeholder="Enter gender"
      />

      <Text>Blood Group</Text>
      <TextInput
        value={bloodGroup}
        onChangeText={setBloodGroup}
        placeholder="Enter blood group"
      />

      <Text>District</Text>
      <TextInput
        value={district}
        onChangeText={setDistrict}
        placeholder="Enter district"
      />

      <Text>City</Text>
      <TextInput
        value={city}
        onChangeText={setCity}
        placeholder="Enter city"
      />

      <Text>Last Bleed</Text>
      <TextInput
        value={lastBleed}
        onChangeText={setLastBleed}
        placeholder="Enter date of last bleed"
      />  */}

      <CustomButton
        text="Register"
        onPress={handleSubmit(Register)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
})
export default DonorProfile;