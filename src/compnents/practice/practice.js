import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const BloodDonationApp = () => {
    const [selectedModule, setSelectedModule] = useState('');
    const [information, setInformation] = useState('');

    const handleModuleSelection = (moduleName) => {
        setSelectedModule(moduleName);
    };

    const handleInputChange = (text) => {
        setInformation(text);
    };

    const renderModuleOptions = () => {
        return (
            <View style={styles.moduleContainer}>
                <TouchableOpacity
                    style={[styles.moduleButton, selectedModule === 'Thalesima' && styles.selectedModuleButton]}
                    onPress={() => handleModuleSelection('Thalesima')}
                >
                    <Text style={[styles.moduleButtonText, selectedModule === 'Thalesima' && styles.selectedModuleButtonText]}>
                        Thalesima
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.moduleButton, selectedModule === 'Anemia' && styles.selectedModuleButton]}
                    onPress={() => handleModuleSelection('Anemia')}
                >
                    <Text style={[styles.moduleButtonText, selectedModule === 'Anemia' && styles.selectedModuleButtonText]}>Anemia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.moduleButton, selectedModule === 'Dialysis' && styles.selectedModuleButton]}
                    onPress={() => handleModuleSelection('Dialysis')}
                >
                    <Text style={[styles.moduleButtonText, selectedModule === 'Dialysis' && styles.selectedModuleButtonText]}>
                        Dialysis
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.moduleButton, selectedModule === 'Transplant' && styles.selectedModuleButton]}
                    onPress={() => handleModuleSelection('Transplant')}
                >
                    <Text style={[styles.moduleButtonText, selectedModule === 'Transplant' && styles.selectedModuleButtonText]}>
                        Transplant
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderSelectedModuleContent = () => {
        switch (selectedModule) {
            case 'Thalesima':
                // case 'Anemia':
                // case 'Dialysis':
                // case 'Transplant':
                return (
                    <View style={styles.moduleContentContainer}>
                        <Text style={styles.moduleContentText}>Please provide the required information:</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your information"
                            onChangeText={handleInputChange}
                            value={information}
                        />
                    </View>
                );
            default:
                return (
                    <View style={styles.moduleContentContainer}>
                        <Text>Please select a module</Text>
                    </View>
                );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Blood Donation App</Text>

            {renderModuleOptions()}

            {renderSelectedModuleContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    moduleContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    moduleButton: {
        marginRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 5,
    },
    moduleButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    selectedModuleButton: {
        backgroundColor: '#333333',
    },
    selectedModuleButtonText: {
        color: '#FFFFFF',
    },
    moduleContentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moduleContentText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    textInput: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default BloodDonationApp;
