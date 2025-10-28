
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: JSON.parse(localStorage.getItem('students')) || []
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
      localStorage.setItem('students', JSON.stringify(state.students));
    },
    editStudent: (state, action) => {
      const { id, updatedData } = action.payload;
      state.students = state.students.map(s =>
        s.id === id ? { ...s, ...updatedData } : s
      );
      localStorage.setItem('students', JSON.stringify(state.students));
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(s => s.id !== action.payload);
      localStorage.setItem('students', JSON.stringify(state.students));
    }
  }
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
