import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ProgressBarWithSteps from './ProgressBarWithSteps';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // You can adjust the total number of steps here

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBarWithSteps steps={totalSteps} currentStep={currentStep} />
      <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
      <Button title="Next Step" onPress={handleNextStep} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default App;
