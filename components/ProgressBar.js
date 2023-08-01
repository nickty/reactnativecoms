import React from 'react';
import { View, StyleSheet } from 'react-native';
import Step from './Step';

const ProgressBar = ({ steps, activeIndex }) => {
    return (
        <View style={styles.progressBar}>
            {steps.map((step, index) => (
                <Step key={index} label={step} isActive={index === activeIndex} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
});

export default ProgressBar;
