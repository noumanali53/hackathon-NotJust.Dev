import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {},

            ]}>

            <Text
                style={[styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
                ]}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        width: '100%',
        // backgroundColor: '#3B71F3',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,

    },

    container_PRIMARY: {
        backgroundColor: '#880808',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',

    },

    container_TERTIARY: {

    },

    text_TERTIARY: {
        color: 'gray'
    },

    container_SECONDARY: {
        borderColor: '#880808',
        borderWidth: 2,
    },

    text_SECONDARY: {
        color: '#880808'
    },
    moduleButton: {
        width: '48%',
        height: 180,
        borderRadius: 10,
        backgroundColor: '#880808',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },



})