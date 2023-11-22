import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const UseTogglePassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState(null);

  const handleSendVerificationCode = async () => {
    try {
      // console.log('phoneProvider:', phoneProvider);
      const phoneProvider = auth().PhoneAuthProvider();
      console.log('phoneProvider:', phoneProvider);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        `+92${phoneNumber}`,
        120, // timeout in seconds
      );
      setVerificationId(verificationId);
      setError(null);
    } catch (err) {
      console.log("err:". err.message, err);
      setError(err.message);
      setVerificationId(null);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode,
      );
      await auth().signInWithCredential(credential);
      setError(null);
      // if the code is valid, navigate to the dashboard screen
      // Example: navigation.navigate('Dashboard')
    } catch (err) {
      setError(err.message);
    }
  };

 

  const signInWithPhoneNumber = async (phoneNumber)=> {
    try{
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log('confirmation: ', confirmation);

    }catch(err){
      console.log('Err at Phone: ', err);
    }

  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Pakistani phone number:</Text>
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+9203027219253')}
      />
      <TextInput
        style={styles.input}
        placeholder="03XXXXXXXXX"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button
        title="Send verification code"
        onPress={handleSendVerificationCode}
        disabled={!phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        keyboardType="numeric"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <Button
        title="Verify code"
        onPress={handleVerifyCode}
        disabled={!verificationCode}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  error: {
    color: 'red',
    marginTop: 16,
  },
});

export default UseTogglePassword;