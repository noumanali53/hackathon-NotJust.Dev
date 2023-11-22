import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../../compnents/custominput/CustomInput';
import CustomButton from '../../../compnents/customButton/CustomButton';
// import CustomSocialButton from '../../compnents/customsocialbutton/CustomSocialButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.//[a-zA-Z0-9-]+)*$/
const SignUpScreen = () => {
    /*const [username, setUsername] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState()
     const [passwordRepeat, setPasswordRepeat] = useState()*/

    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm()

    const pwd = watch('Password')
    
    const onRegisterPressed = () => {
        navigation.navigate('ConfirmInformation')
    }

    const onTermsOfUsePress = () => {
        navigation.navigate('TermsConditions')
    }
    const onPrivacyPolicyPress = () => {
        navigation.navigate('PrivacyPolicy')
    }


    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Text style={styles.title}>Create an account</Text>

                {/* For UserName input */}
                <CustomInput
                    placeholder="Username"
                    name="username"
                    rules={{
                        required: 'username is required',
                        minLength: {
                            value: 3,
                            message: 'Username should be at least 3 character long',
                        },
                        maxLength: {
                            value: 24,
                            message: 'Username should be max 24 characters long',
                        }
                    }}
                    control={control}
                />

                <CustomInput
                    placeholder="Phone Number "
                    name="Phone Number"
                    rules={{
                        required: 'Phone Number is Required',
                        minLength: {
                            value: 11,
                            message: 'Phone Number should be at least 11 digit',
                        },
                        maxLength:{
                            value:11,
                            message:'Phone Number not exeed 11 digit'
                        }
                        

                    }}
                    control={control}
                />

                {/* For Password user Input */}
                <CustomInput
                    placeholder="Password"
                    name="Password"
                    control={control}
                    secureTextEntry={true}
                    rules={{

                        required: 'Passwword is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be minimum 8 character long'
                        }
                    }}
                />

                <CustomInput
                    placeholder='Repeat Password'
                    name='Password-Repeat'
                    control={control}
                    secureTextEntry={true}
                    rules={{
                        validate: value => value === pwd || 'password do not match',
                    }
                    }
                />

                {/* Register Button */}
                <CustomButton
                    text='Register'
                    onPress={handleSubmit(onRegisterPressed)}
                />
                <Text style={styles.text}>By registering, you confirm that you accept our {' '}
                    <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of User</Text>  and {' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPress}> Privacy Policy</Text>

                </Text>

                {/* <CustomSocialButton /> */}

                <CustomButton
                    text="Have an account?  Sign in "
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

export default SignUpScreen