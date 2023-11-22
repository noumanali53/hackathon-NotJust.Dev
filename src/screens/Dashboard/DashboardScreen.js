
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, ScrollView, handleSubmit } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../compnents/customButton/CustomButton';
import { useForm } from 'react-hook-form';
const DashboardScreen = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()
  // const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onPatientsModule = (data) => {
    navigation.navigate('patients')
  }
  const onAddRequest = (data) => {
    navigation.navigate('AddRequest')
  }
  const onDonorProfile = (data) => {
    navigation.navigate('DonorProfile')
  }
  const onAddVolunteer = (data) => {
    navigation.navigate('AddVolunteer')
  }
  const onSetReminder = (data) => {
    navigation.navigate('SetReminder')
  }
  const onBloodDonationScheduler = (data) => {
    navigation.navigate('Scheduler')
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.container}>

        <TouchableOpacity
          control={control}
          // moduleButton={moduleButton}
          style={styles.moduleButton}
          // text='Patients'
          onPress={handleSubmit(onPatientsModule)} >
          <Text style={styles.buttonText}>Patients</Text>
        </TouchableOpacity>

        {/* <CustomButton
          control={control}
          // moduleButton={moduleButton}
          // style={styles.moduleButton}
          text='Patients'
          onPress={handleSubmit(onPatientsModule)} /> */}

        <TouchableOpacity style={styles.moduleButton} onPress={handleSubmit(onAddRequest)}>
          <Text style={styles.buttonText}>Add Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleButton} onPress={handleSubmit(onDonorProfile)}>
          <Text style={styles.buttonText}>Donor Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleButton} onPress={handleSubmit(onAddVolunteer)}>
          <Text style={styles.buttonText}>Add Volunteer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleButton} onPress={handleSubmit(onSetReminder)}>
          <Text style={styles.buttonText}>Set Reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleButton} onPress={handleSubmit(onBloodDonationScheduler)}>
          <Text style={styles.buttonText}>Blood Donation Scheduler</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  moduleButton: {
    width: '48%',
    height: 180,
    // borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 3,
    // borderRadiusColor:'#880808',
    borderColor: '#880808',
    backgroundColor: '#880808',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#880808',
    margin: 10,
    // alignItems: 'center',

  },

});

export default DashboardScreen;







