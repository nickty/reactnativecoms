import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ProgressBar from '../components/ProgressBar'
import TextSlider from '../components/TextSlider';
import ClickableImageBox from '../components/ClickableImageBox';

const SignUpScreen = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    const handleNextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleBoxPress = () => {
    // Handle the press event
  };

    return (
        <View style={styles.container}>
            <ProgressBar steps={steps} currentStep={currentStep} />
            <View style={styles.stepContainer}>
                <Text style={styles.stepContent}>{steps[currentStep]}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={handlePreviousStep} disabled={currentStep === 0} />
                <Button title="Next" onPress={handleNextStep} disabled={currentStep === steps.length - 1} />
            </View>

            <View>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
                <Button
                    title="Personal Info"
                    onPress={() => navigation.navigate('PersonalInfo')}
                />
            </View>
            <TextSlider />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row'}}>
<ClickableImageBox
        onPress={handleBoxPress}
        imageSource={require('./football.png')}
      />
      <ClickableImageBox
        onPress={handleBoxPress}
        imageSource={require('./football.png')}
      />
                </View>
      
    </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    stepContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepContent: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default SignUpScreen;
