import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AppWrapper from './components/AppWrapper';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import AccountSetupScreen from './screens/AccountSetupScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
          <Stack.Screen name="AccountSetupScreen" component={AccountSetupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppWrapper>
  );
};

export default App;
