import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StepProgressIndicator = ({ totalSteps, currentStep }) => {
  const renderSteps = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(
        <View key={i} style={styles.stepContainer}>
          <View
            style={[
              styles.step,
              i === currentStep ? styles.activeStep : styles.inactiveStep,
            ]}
          >
            {i === currentStep ? (
              <Icon name="check" size={20} color="white" />
            ) : (
              <Text style={styles.stepNumber}>{i}</Text>
            )}
          </View>
          {i !== totalSteps && <View style={styles.line} />}
        </View>
      );
    }
    return steps;
  };

  return <View style={styles.container}>{renderSteps()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeStep: {
    backgroundColor: 'blue', // Customize color for active step
  },
  inactiveStep: {
    backgroundColor: 'lightgray', // Customize color for inactive step
  },
  stepNumber: {
    color: 'white',
    fontSize: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray', // Customize color for the line
  },
});

export default StepProgressIndicator;
