// EmployeeListScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../../employeeSlice';


const EmployeeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employee.employeeList);

  const handleEditEmployee = (employee) => {
    navigation.navigate('EditEmployeeScreen', { employee });
  };

  const handleDeleteEmployee = (employeeId, employeeName) => {
    Alert.alert(
      'Delete Employee',
      `Are you sure you want to delete ${employeeName}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Dispatch the deleteEmployee action to delete the employee from the Redux store
            dispatch(deleteEmployee({ id: employeeId }));
            Alert.alert('Success', `Employee ${employeeName} deleted successfully!`);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {employeeList.length > 0 ? (
        <FlatList
          data={employeeList}
          keyExtractor={(item) => item.id.toString()} // Assuming 'id' is a number, adjust accordingly
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.employeeCard}>
              <Text style={styles.employeeName}>{item.name}</Text>
              <Text style={styles.employeeDetails}>{`Age: ${item.age}`}</Text>
              <Text style={styles.employeeDetails}>{`Profile: ${item.profile}`}</Text>
              <Text style={styles.employeeDetails}>{`ID: ${item.id}`}</Text>
              <Text style={styles.employeeDetails}>{`Blood Group: ${item.bloodGroup}`}</Text>

              {/* Edit and Delete buttons */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => handleEditEmployee(item)}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => handleDeleteEmployee(item.id, item.name)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>No employees added</Text>
        </View>
      )}

      {/* "Add Employee" TouchableOpacity dynamically positioned below the list */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('AddEmployeeScreen');
        }}
      >
        <Text style={styles.addButtonLabel}>Add Employee</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f4f4f4',
      },
      employeeCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        elevation: 3,
      },
      employeeName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      employeeDetails: {
        fontSize: 14,
        marginBottom: 3,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
      },
      actionButton: {
        flex: 1,
        borderRadius: 5,
        padding: 8,
        marginHorizontal: 5,
        alignItems: 'center',
      },
      editButton: {
        backgroundColor: '#ffc107',
      },
      deleteButton: {
        backgroundColor: '#dc3545',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      emptyListText: {
        fontSize: 16,
        color: '#555',
      },
      addButton: {
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 10,
        margin: 10,
        marginBottom: 20,
      },
      addButtonLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default EmployeeListScreen;
