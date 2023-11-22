import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import CustomInput from '../../compnents/custominput/CustomInput';
import { useForm } from 'react-hook-form'
import CustomButton from '../../compnents/customButton/CustomButton';
import DashboardScreen from '../Dashboard/DashboardScreen';
import DropDownList from '../../compnents/dropdownlist/DropDownList'
import Checkbox from '../../compnents/checkbox/CheckBox';
import { useNavigation } from '@react-navigation/native';


const AddRequest = () => {
  const navigation = useNavigation();
  const { control,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const DashboardScreen = () => {

    navigation.navigate("Dashboard")
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Text style={styles.title}>Add Request</Text>

        <CustomInput
          control={control}
          name='patietn name'
          placeholder="Enter Patient Name"
          rules={{
            required: 'Provide Valide Name',
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

        <View style={styles.drop}>
          <DropDownList
          />
        </View>

        <Checkbox />

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

        <CustomInput
          name="Location"
          control={control}
          placeholder="Enter location"
          rules={{
            required: 'Provide Location',
            
          }}
        />

        <CustomInput
          name="Phone Number"
          control={control}
          placeholder="Enter recipient contact number"
          keyboard="number-pad"
          rules={{
            required: 'Provide Valid Phone Number',
            minLength: {
              value: 11
            }
          }}
        />

        <CustomInput
          name="Description"
          multiline={true}
          numberOfLines={4}
          control={control}
          placeholder="Description"

        />

        <CustomButton
          text="Add Request"
          onPress={handleSubmit(DashboardScreen)}
        // type="TERTIARY"x
        />
      </View>
    </ScrollView>
  );
};


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
  text: {
    color: 'gray',
    // fontSize:'bold'
  },
  link:
  {
    color: 'red'
  },
  drop: {
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,

  },
  CheckBox:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }


})

export default AddRequest;
