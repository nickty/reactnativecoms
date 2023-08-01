import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ProgressBarWithSteps from './ProgressBarWithSteps';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Set the total number of steps

  const onNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBarWithSteps steps={totalSteps} currentStep={currentStep} />
      {/* Your other content goes here */}
      {/* You can have buttons to navigate between steps */}
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={onPreviousStep} />
        <Button title="Next" onPress={onNextStep} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default App;
