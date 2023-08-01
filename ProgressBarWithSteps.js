import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const ProgressBarWithSteps = ({ steps, currentStep }) => {
    const progress = (currentStep - 1) / (steps - 1);

    return (
        <View style={styles.container}>
            <ProgressBar progress={progress} width={300} height={20} />
            <View style={styles.stepsContainer}>
                {Array.from({ length: steps }, (_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.step,
                            { backgroundColor: index < currentStep ? '#4CAF50' : '#ccc' },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginTop: 10,
    },
    step: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
});

export default ProgressBarWithSteps;
