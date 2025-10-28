// import React, { useState, useEffect } from 'react'

// export default  function StudentForm({ initial = null, onSave, onCancel }) {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     college: '',
//     contact: '',
//     email: '',
//     address: '',
//     enrollment: ''
//   })


//   const [error, setError] = useState('') // for inline alert

//   useEffect(() => {
//     if (initial) {
//       setForm({
//         firstName: initial.firstName || '',
//         lastName: initial.lastName || '',
//         college: initial.college || '',
//         contact: initial.contact || '',
//         email: initial.email || '',
//         address: initial.address || '',
//         enrollment: initial.enrollment || ''
//       })
//     }
//   }, [initial])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setForm(prev => ({ ...prev, [name]: value }))
//     setError('') // clear error when user types
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (!form.firstName.trim() || !form.lastName.trim()) {
//       setError('⚠️ First name and Last name are required')
//       return
//     }

//     if (!form.email.includes('@')) {
//       setError('⚠️ Please enter a valid email')
//       return
//     }

//     if (!/^\d{10}$/.test(form.contact)) {
//       setError('⚠️ Contact must be 10 digits')
//       return
//     }

//     setError('')
//     onSave(form)
//   }

//   return (
//     <form className="student-form" onSubmit={handleSubmit}>

//       {error && <div className="form-alert">{error}</div>}

//       <div className="row">
//         <div className="field">
//           <label>First Name</label>
//           <input name="firstName" value={form.firstName} onChange={handleChange} />
//         </div>
//         <div className="field">
//           <label>Last Name</label>
//           <input name="lastName" value={form.lastName} onChange={handleChange} />
//         </div>
//       </div>

//       <div className="row">
//         <div className="field">
//           <label>College Name</label>
//           <input name="college" value={form.college} onChange={handleChange} />
//         </div>
  
//         <div className="field">
//           <label>Contact</label>
//           <input name="contact" value={form.contact} onChange={handleChange} />
//         </div>
//       </div>

//       <div className="row">
//         <div className="field">
//           <label>Email</label>
//           <input name="email" value={form.email} onChange={handleChange} />
//         </div>
//         <div className="field">
//           <label>Enrollment No</label>
//           <input name="enrollment" value={form.enrollment} onChange={handleChange} />
//         </div>
//       </div>

//       <div className="row">
//         <div className="field full">
//           <label>Address</label>
//           <textarea name="address" value={form.address} onChange={handleChange} />
//         </div>
//       </div>

//       <div className="form-actions">
//         <button type="submit" className="save">Save</button>
//         <button type="button" className="cancel" onClick={onCancel}>Cancel</button>
//       </div>
//     </form>
  
//   )
// }
// import React, { useState, useEffect } from 'react';

// const StudentForm = ({ onSubmit, initial }) => {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     college: '',
//     contact: '',
//     email: '',
//     address: '',
//     enrollment: ''
//   });

//   useEffect(() => {
//     if (initial) setForm(initial);
//   }, [initial]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {Object.keys(form).map((key) => (
//         <input
//           key={key}
//           name={key}
//           placeholder={key.replace(/^\w/, (c) => c.toUpperCase())}
//           value={form[key]}
//           onChange={handleChange}
//           required
//         />
//       ))}
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default StudentForm;
import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, initial }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    college: '',
    contact: '',
    email: '',
    address: '',
    enrollment: ''
  });


 useEffect(() => {
    if (initial) setForm(initial);
  }, [initial]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="field">
          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>College</label>
          <input
            name="college"
            placeholder="College"
            value={form.college}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Contact</label>
          <input
            name="contact"
            placeholder="Contact"
            value={form.contact}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Enrollment</label>
          <input
            name="enrollment"
            placeholder="Enrollment No"
            value={form.enrollment}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="field full">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="save">Save</button>
        <button type="reset" className="cancel">Cancel</button>
      </div>
    </form>
  );
};

export default StudentForm;
