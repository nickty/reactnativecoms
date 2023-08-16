import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import StepProgressIndicator from '../components/StepProgressIndicator';


const AccountSetupScreen = ({ navigation }) => {
  const [step, setStep] = useState(2);

  const onNextStep = () => {
    setStep(step + 1);
    // Additional logic for moving to the next step
  };

  return (
    <View>
      <StepProgressIndicator totalSteps={5} currentStep={step} />
      {/* Form fields and content for personal information */}
      <Button title="Next" onPress={onNextStep} />
    </View>
  );
};

export default AccountSetupScreen;
