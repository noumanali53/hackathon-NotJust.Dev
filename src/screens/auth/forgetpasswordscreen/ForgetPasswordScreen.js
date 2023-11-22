import { View, Text, StyleSheet, ScrollView } from 'react-native'
// import React, { useState } from 'react'
import CustomInput from '../../../compnents/custominput/CustomInput';
import CustomButton from '../../../compnents/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'

const ForgetPasswordScreen = () => {
    // ============================================================================================
    // const [phoneNumber, setphoneNumber] = useState()
    // 
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('NewPassword')
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
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                    keyboard='number-pad'
                    name="Phone Number"
                    placeholder="Enter your phone number"
                    control={control}
                    rules={{
                        required: 'Phone number is required',
                        minlength: {
                            value: 11,
                            message: 'Phone number should be at least 11 digit',
                        },
                        maxLength: {
                            value: 11,
                            message: 'Phone Number not exeed 11 digit'
                        }

                    }}
                />

                {/* Register Button */}
                <CustomButton
                    text="Send"
                    onPress={handleSubmit(onSendPressed)}
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
export default ForgetPasswordScreen