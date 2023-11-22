import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../../compnents/custominput/CustomInput';
import CustomButton from '../../../compnents/customButton/CustomButton';
import Navigation from '../../../navigation/navigate';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'

const NewPasswordScreen = () => {
    // ============================================================================================
    // const [code, setCode] = useState('')   
    // const [newPassword, setnewPassword] = useState()
    const { control, handleSubmit, formState: { errors } } = useForm()
    const navigation = useNavigation();

    const onSubmittPressed = () => {

        navigation.navigate('Dashboard')
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
                    placeholder="Code"
                    control={control}
                    name='Code'

                />
                <CustomInput
                    placeholder="Enter your new password"
                    control={control}
                    rules={{
                        required:'Password is required',
                        
                    }}

                />
                {/* Register Button */}
                <CustomButton
                    text='Submitt'
                    onPress={onSubmittPressed}
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

export default NewPasswordScreen