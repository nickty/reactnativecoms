import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import SignUpProgress from './components/SignUpProgress';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up with email:', email, 'and password:', password);
  };

  const steps = ['Email', 'Password', 'Confirm Password'];

  return (
    <View style={styles.container}>
      <SignUpProgress steps={steps} activeStep={activeStep} />

      {/* Render form fields based on activeStep */}
      {activeStep === 0 && (
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      )}

      {activeStep === 1 && (
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      )}

      {activeStep === 2 && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
      )}

      <View style={styles.buttonContainer}>
        {activeStep > 0 && <Button title="Previous" onPress={handlePreviousStep} />}
        {activeStep < steps.length - 1 ? (
          <Button title="Next" onPress={handleNextStep} />
        ) : (
          <Button title="Sign Up" onPress={handleSignUp} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default App;
