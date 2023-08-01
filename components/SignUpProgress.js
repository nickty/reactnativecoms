import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpProgress = ({ steps, activeStep }) => {
    return (
        <View style={styles.progressContainer}>
            {steps.map((step, index) => (
                <View key={index} style={[styles.step, index <= activeStep && styles.activeStep]}>
                    <Text style={styles.stepText}>{step}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },
    step: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#ccc',
        alignItems: 'center',
    },
    activeStep: {
        backgroundColor: '#007AFF',
    },
    stepText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SignUpProgress;
