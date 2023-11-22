import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Controller } from 'react-hook-form'

const Checkbox = ({ rules = {} }) => {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
        // setError(false)
        if (!checked) {
            setError(true); // Set error state if checkbox is not checked
        } else {
            setError(false);
            // Perform additional validation or logic if needed
        }
    };
   

    return (

        <View style={styles.container}>

            <CheckBox
                title="Tell us about Patient Condition?"
                checked={checked}
                onPress={handleCheck}

            />
             {error && <Text style={styles.errorText}>Checkbox is required</Text>}

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Checkbox;
