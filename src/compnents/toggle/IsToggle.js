import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const App = () => {
    const [isUserAvailable, setIsUserAvailable] = useState(false);

    const handleAvailabilityToggle = (value) => {
        setIsUserAvailable(value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {/* <Text style={styles.label}>Are you available?</Text> */}
                <Text style={styles.txt}>
                    Status: {isUserAvailable ? 'Available' : 'Not Available'}
                </Text>
                <Switch
                    value={isUserAvailable}
                    onValueChange={handleAvailabilityToggle}
                />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    txt:{
        color:'black',
        fontWeight:'bold'
    },

    row: {

        justifyContent: 'space-between',
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },

});

export default App;
