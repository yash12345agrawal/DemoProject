// Import necessary libraries
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

// Create the LoginForm component
const LoginForm = ({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
  <View style={styles.formContainer}>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
      />
      {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
    </View>

    <Button title="Login" onPress={handleSubmit} />
  </View>
);

// Create the LoginScreen component
const LoginScreen = (props) => {
  const handleLogin = (values) => {
    // Implement your login logic here using values.email and values.password
    // console.log('Logging in with:', values);
    props.navigation.navigate("HomeScreen")
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {(props) => <LoginForm {...props} />}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default LoginScreen;
