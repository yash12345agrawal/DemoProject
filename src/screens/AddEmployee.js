// AddEmployeeScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../employeeSlice';


const AddEmployeeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState({
    name: '',
    age: '',
    profile: '',
    id: '',
    bloodGroup: '',
  });

  const handleAddEmployee = () => {
    // Dispatch the addEmployee action to update the Redux store
    dispatch(addEmployee(employeeData));

    // Navigate back to the EmployeeListScreen after adding an employee
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Employee</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee Name"
        onChangeText={(text) => setEmployeeData({ ...employeeData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={(text) => setEmployeeData({ ...employeeData, age: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Profile"
        onChangeText={(text) => setEmployeeData({ ...employeeData, profile: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={(text) => setEmployeeData({ ...employeeData, id: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Blood Group"
        onChangeText={(text) => setEmployeeData({ ...employeeData, bloodGroup: text })}
      />
      <Button title="Add Employee" onPress={handleAddEmployee} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default AddEmployeeScreen;
