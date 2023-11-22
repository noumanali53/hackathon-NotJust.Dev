import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import CustomButton from '../../compnents/customButton/CustomButton';
import CustomInput from '../../compnents/custominput/CustomInput';
import Geolocation from 'react-native-geolocation-service';
import { useForm } from 'react-hook-form'
import IsToggle from '../../compnents/toggle/IsToggle';
import FindLocation from '../../compnents/location/findLocation';

const VolunteerProfileScreen = ({ tetx }) => {

  const { control,
    handleSubmit,
    formState: { errors }
  } = useForm()



  const saveProfile = (props) => {
    // Logic to save the volunteer profile
  };

  const [events, setEvents] = useState([]);

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItemContainer}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDetails}>Date: {item.date}</Text>
      <Text style={styles.eventDetails}>Location: {item.location}</Text>
      <Button title="Sign Up" onPress={() => signUpForEvent(item.id)} color="#F44336" />
    </View>
  );

  const signUpForEvent = (eventId) => {
    // Logic to sign up the volunteer for the event
  };

  const [notifications, setNotifications] = useState([]);

  const renderNotificationItem = ({ item }) => (
    <Text style={styles.notification}>{item.message}</Text>
  );



  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <View style={styles.align}>
          <Text style={styles.title}>Volunteer</Text>
        </View>

        <CustomInput
          control={control}
          name='Full Name'
          placeholder="Full Name"
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



        <FindLocation />
        <IsToggle />

        <CustomButton text="Save Profile" onPress={saveProfile} />


        <View>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <FlatList
            data={events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <FlatList
            data={notifications}
            renderItem={renderNotificationItem}
            keyExtractor={(item) => item.id}
          />
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',

  },

  align: {
    // justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#880808',
    margin: 10,

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F44336',
  },
  eventItemContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDetails: {
    fontSize: 14,
    marginBottom: 3,
  },
  notification: {
    marginBottom: 5,
    color: '#F44336',
  },
});

export default VolunteerProfileScreen;



