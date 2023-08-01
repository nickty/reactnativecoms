import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ProgressBarWithSteps = ({ steps, currentStep }) => {
    const progressPercentage = ((currentStep - 1) / (steps - 1)) * 100;

    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View
                    style={[styles.progress, { width: `${progressPercentage}%` }]}
                />
            </View>
            <View style={styles.stepsContainer}>
                {Array.from({ length: steps }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.step,
                            index + 1 === currentStep && styles.currentStep,
                        ]}
                    />
                ))}
            </View>
            <Text style={styles.stepText}>
                Step {currentStep} of {steps}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    progressBar: {
        backgroundColor: '#ccc',
        height: 10,
        borderRadius: 5,
        width: Dimensions.get('window').width * 0.8,
        overflow: 'hidden',
    },
    progress: {
        backgroundColor: '#007AFF',
        height: '100%',
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.8,
        marginTop: 10,
    },
    step: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
    },
    currentStep: {
        backgroundColor: '#007AFF',
    },
    stepText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProgressBarWithSteps;
