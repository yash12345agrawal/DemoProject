// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import AddEmployeeScreen from './src/screens/AddEmployee';
import { Provider } from 'react-redux';
import EditEmployeeScreen from './src/screens/EditEmployee';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddEmployeeScreen" component={AddEmployeeScreen} />
        <Stack.Screen name="EditEmployeeScreen" component={EditEmployeeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;