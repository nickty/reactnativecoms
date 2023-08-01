import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = ['Personal Info', 'Account Setup', 'Verification', 'Confirmation'];

  const handleNextStep = () => {
    setActiveStepIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
  };

  const handlePreviousStep = () => {
    setActiveStepIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <View style={styles.container}>
      <ProgressBar steps={steps} activeIndex={activeStepIndex} />
      <View style={styles.stepContentContainer}>
        {activeStepIndex === 0 && (
          <View>
            {/* Render your Personal Info form here */}
            <Button title="Next" onPress={handleNextStep} />
          </View>
        )}
        {activeStepIndex === 1 && (
          <View>
            {/* Render your Account Setup form here */}
            <Button title="Previous" onPress={handlePreviousStep} />
            <Button title="Next" onPress={handleNextStep} />
          </View>
        )}
        {activeStepIndex === 2 && (
          <View>
            {/* Render your Verification form here */}
            <Button title="Previous" onPress={handlePreviousStep} />
            <Button title="Next" onPress={handleNextStep} />
          </View>
        )}
        {activeStepIndex === 3 && (
          <View>
            {/* Render your Confirmation page here */}
            <Button title="Previous" onPress={handlePreviousStep} />
            <Button title="Finish" onPress={() => console.log('Sign-up completed!')} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  stepContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
