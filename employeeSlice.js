// employeeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employeeList: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const { id } = action.payload;
      const existingEmployee = state.employeeList.find((employee) => employee.id === id);
      if (existingEmployee) {
        Object.assign(existingEmployee, action.payload);
      }
    },
    deleteEmployee: (state, action) => {
      const { id } = action.payload;
      state.employeeList = state.employeeList.filter((employee) => employee.id !== id);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
