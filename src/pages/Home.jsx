// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// export default function Home({ students, setStudents }) {
//   const navigate = useNavigate()
 
//   const handleDelete = (id) => {
//     if (!confirm('Delete this student?')) return
//     setStudents(prev => prev.filter(s => s.id !== id))
//   }

//   return (
//     <div className="page home-page">
//       <h2>All Students</h2>

//       {students.length === 0 ? (
//         <div className="empty">No students yet — <Link to="/add/student/details">Add one</Link></div>
//       ) : (
//         <div className="table-wrap">
//           <table className="students-table">
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>College</th>
//                 <th>Contact</th>
//                 <th>Email</th>
//                 <th>Address</th>
//                 <th>Enrollment No</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map(student => (
//                 <tr key={student.id}>
//                   <td>{student.firstName}</td>
//                   <td>{student.lastName}</td>
//                   <td>{student.college}</td>
//                   <td>{student.contact}</td>
//                   <td>{student.email}</td>
//                   <td>{student.address}</td>
//                   <td>{student.enrollment}</td>
//                   <td className="actions">
//                     <button title="Edit" onClick={() => navigate(`/edit/${student.id}`)}> ✏️ </button>
//                     <button title="Delete" onClick={() => handleDelete(student.id) } > 🗑️</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   )
// }
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/studentSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="container">
      <h1>Student Records</h1>
      {/* <button onClick={() => navigate('/add/student/details')}>Add Student Details</button> */}
      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>College</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Enrollment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.college}</td>
              <td>{s.contact}</td>
              <td>{s.email}</td>
              <td>{s.address}</td>
              <td>{s.enrollment}</td>
              <td>
                <button onClick={() => navigate(`/edit/${s.id}`)}>✏️</button>
                <button onClick={() => handleDelete(s.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
