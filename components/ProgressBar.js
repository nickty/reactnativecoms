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
                        { width: 100 / steps.length + '%', backgroundColor: index <= currentStep ? '#007AFF' : '#ccc' },
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
        height: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginVertical: 10,
    },
    step: {
        flex: 1,
        height: '100%',
        borderRadius: 5,
    },
});

export default ProgressBar;
