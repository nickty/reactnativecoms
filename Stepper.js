import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const Stepper = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const progress = (currentStep - 1) / (steps.length - 1);

    return (
        <View style={styles.container}>
            <ProgressBar progress={progress} color="#6200EE" style={styles.progressBar} />
            <View style={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <View key={index} style={styles.step}>
                        <Text style={[styles.stepText, currentStep === index + 1 && styles.activeStepText]}>
                            {step}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    progressBar: {
        height: 10,
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    step: {
        alignItems: 'center',
        flex: 1,
    },
    stepText: {
        color: '#888',
    },
    activeStepText: {
        color: '#6200EE',
        fontWeight: 'bold',
    },
});

export default Stepper;
