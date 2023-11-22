import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../../compnents/custominput/CustomInput';
import CustomButton from '../../../compnents/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from'react-hook-form'

const ConfirmEmailScreen = () => {
    // const [code, setCode] = useState()

    const {control, handleSubmit}=useForm()
    const navigation = useNavigation();

    const onResendPressed = () => {
        // navigation.navigate('')
    }
    const onConfirmPressed = () => {
        navigation.navigate('Dashboard')
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>

                {/* For UserName input */}
                <CustomInput
                    placeholder="Enter Your Confirmation Code"
                    value={code}
                    setValue={setCode}
                />
                {/* Register Button */}
                <CustomButton
                    text="Confirm"
                    onPress={onConfirmPressed}
                />
                <CustomButton
                    text="Resend Code"
                    onPress={onResendPressed}
                    type="SECONDARY"
                />
                <CustomButton
                    text="Back to Sign in "
                    onPress={onSignInPress}
                    type="TERTIARY"
                />



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

    },
    text: {
        color: 'gray'
    },
    link:
    {
        color: 'red'
    }

})

export default ConfirmEmailScreen