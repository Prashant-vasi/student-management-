// import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import StudentForm from '../components/StudentForm'

// export default function AddStudent({ students, setStudents }) {
//   const { id } = useParams()
//   const navigate = useNavigate()

//   const editing = Boolean(id)
//   const studentToEdit = editing ? students.find(s => s.id === id) : null

//   const handleSave = (data) => {
//     if (editing) {
//       setStudents(prev => prev.map(s => s.id === id ? { ...s, ...data } : s))
//     } else {
//       const newStudent = { id: Date.now().toString(), ...data }
//       setStudents(prev => [newStudent, ...prev])
//     }
//     navigate('/')
//   }

//   return (
//     <div className="page form-page">
//       <h2>{editing ? 'Edit Student' : 'Add Student'}</h2>
//       <StudentForm initial={studentToEdit} onSave={handleSave} onCancel={() => navigate('/')} />
//     </div>
//   )
// }
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, editStudent } from '../redux/studentSlice';
import { useNavigate, useParams } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

const AddStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students.students);
  const existing = students.find((s) => s.id === id);

  const handleSubmit = (data) => {
    if (existing) {
      dispatch(editStudent({ id, updatedData: data }));
    } else {
      dispatch(addStudent({ id: Date.now().toString(), ...data }));
    }
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{existing ? 'Edit Student' : 'Add Student'}</h2>
      <StudentForm onSubmit={handleSubmit} initial={existing} />
    </div>
  );
};

export default AddStudent;
