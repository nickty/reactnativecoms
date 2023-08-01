import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ steps, currentStep }) => {
    return (
        <View style={styles.progressBar}>
            {steps.map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.step,
                        {
                            backgroundColor: index < currentStep ? '#007AFF' : '#ccc',
                            borderColor: index === currentStep ? '#007AFF' : '#ccc',
                        },
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 20,
        marginVertical: 10,
    },
    step: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 10,
    },
});

export default ProgressBar;
