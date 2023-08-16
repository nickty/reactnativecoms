import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;

const StepProgressIndicator = ({ totalSteps, currentStep }) => {
  const renderSteps = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(
        <View key={i} style={styles.stepContainer}>
          <View
            style={[
              styles.step,
              i < currentStep ? styles.completedStep : i === currentStep ? styles.activeStep : styles.inactiveStep,
            ]}
          >
            {i < currentStep ? (
              <Icon name="check" size={20} color="white" />
            ) : (
              <Text style={styles.stepNumber}>{i}</Text>
            )}
          </View>
          {i !== totalSteps && (
            <View
              style={[
                styles.line,
                i < currentStep ? styles.activeLine : styles.inactiveLine,
              ]}
            />
          )}
        </View>
      );
    }
    return steps;
  };

  return <View style={styles.container}>{renderSteps()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20
  },
  stepContainer: {
    flex: 1,
    flexDirection: 'row',
    // width: 100,
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
  completedStep: {
    backgroundColor: 'green', // Customize color for completed step
  },
  stepNumber: {
    color: 'white',
    fontSize: 16,
  },
  line: {
    flex: 1,
    height: 2, // Height of the line
    backgroundColor: 'gray', // Default color for the line
    marginHorizontal: 5, // Adjust this for spacing between line and step
  },
  activeLine: {
    backgroundColor: 'blue', // Customize color for active line
  },
  inactiveLine: {
    backgroundColor: 'lightgray', // Customize color for inactive line
  },
});

export default StepProgressIndicator;
