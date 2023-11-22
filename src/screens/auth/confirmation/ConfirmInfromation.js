import { View, Text, StyleSheet, ScrollView } from 'react-native'
// import React, { useState } from 'react'
import CustomInput from '../../../compnents/custominput/CustomInput';
import CustomButton from '../../../compnents/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'


const ConfirmInformation = () => {
    // ============================================================================================

    // const [passwordRepeat, setPasswordRepeat] = useState()
    const { control, handleSubmit, formState: { error } } = useForm()

    const navigation = useNavigation();
    const handleVerificationCode=async()=>{
        try{
            await confirmation.confirm(verificationCode)
            
            //if the confirmation code is vallid, navigate to the dashboard
        }
        catch(error){
            console.log('Invalid Code',error)
        }
    }


    const onConfirmPressed = () => {
        navigation.navigate('Dashboard')
    }

    const onResendPress = () => {
        console.warn('onResendPress')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    // ============================================================================================

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>
                <Text style={styles.title}>Confirm Mobile Number</Text>

                <CustomInput
                    placeholder="Enter your confirmation code"
                    name="Confirmation Code"
                    control={control}
                    keyboard='number-pad'
                    rules={
                        {
                            required: 'Code is Required',
                        }
                    }
                />

                {/* Register Button */}
                <CustomButton
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                    type="SECONDARY"
                />

                <CustomButton
                    text="Resend Code "
                    onPress={onResendPress}
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
// ============================================================================================

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


})

export default ConfirmInformation