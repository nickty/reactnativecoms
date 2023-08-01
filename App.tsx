import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Stepper from './Stepper';

const App = () => {
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4']; // Replace with your actual step names

  return (
    <View style={styles.container}>
      <Stepper steps={steps} />
      {/* Your other app content goes here */}
      <Text>Shoing </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
