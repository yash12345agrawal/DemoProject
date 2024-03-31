// EditEmployeeScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../employeeSlice';


const EditEmployeeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { employee } = route.params;

  const [employeeData, setEmployeeData] = useState({
    name: employee.name,
    age: employee.age.toString(),
    profile: employee.profile,
    id: employee.id.toString(),
    bloodGroup: employee.bloodGroup,
  });

  const handleUpdateEmployee = () => {
    // Dispatch the updateEmployee action to update the Redux store
    dispatch(updateEmployee(employeeData));

    // Navigate back to the EmployeeListScreen after updating an employee
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Employee</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee Name"
        value={employeeData.name}
        onChangeText={(text) => setEmployeeData({ ...employeeData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={employeeData.age}
        onChangeText={(text) => setEmployeeData({ ...employeeData, age: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Profile"
        value={employeeData.profile}
        onChangeText={(text) => setEmployeeData({ ...employeeData, profile: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={employeeData.id}
        onChangeText={(text) => setEmployeeData({ ...employeeData, id: text })}
        editable={false} // ID should not be editable
      />
      <TextInput
        style={styles.input}
        placeholder="Blood Group"
        value={employeeData.bloodGroup}
        onChangeText={(text) => setEmployeeData({ ...employeeData, bloodGroup: text })}
      />
      <Button title="Update Employee" onPress={handleUpdateEmployee} />
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

export default EditEmployeeScreen;
