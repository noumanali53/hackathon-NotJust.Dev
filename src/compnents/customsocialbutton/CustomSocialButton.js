import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../customButton/CustomButton'
const CustomSocialButton = () => {
    const onSignInFacebook = () => {
        console.warn('SignInFacebook')
    }

    const onSignInGoogle = () => {
        console.warn('SignInGoogle')
    }
    const onSignInApple=()=>{
      console.warn('SignInApple')

    }
  return (
    <>
       <CustomButton
                    text='SignIn with Facebook'
                    onPress={onSignInFacebook}
                    bgColor='#E7EAF4'
                    fgColor='#4765A9'

                />

                <CustomButton
                    text='SignIn with Google'
                    onPress={onSignInGoogle}
                    bgColor='#FAE9EA'
                    fgColor='#DD4D44'

                />
                <CustomButton
                    text='SignIn with Apple'
                    onPress={onSignInApple}
                    bgColor='#e3e3e3'
                    fgColor='#363636'

                />
    </>
  )
}

export default CustomSocialButton

const styles = StyleSheet.create({})