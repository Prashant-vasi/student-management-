import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'

const STORAGE_KEY = 'student_manager_students'

export default function App() {
  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        setStudents(JSON.parse(raw))
      } catch (e) {
        console.error('Could not parse students from localStorage', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
  }, [students])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">Student Manager</h1>
        <nav>                                         
          <Link to="/">Home</Link>
          <button className="add-btn" onClick={() => navigate('/add/student/details')}>+Add Student Details</button>
        </nav>
      </header>
 
      <main>
        <Routes>
          <Route path="/" element={<Home students={students} setStudents={setStudents} />} />
          <Route path="/add/student/details" element={<AddStudent students={students} setStudents={setStudents} />} />
          <Route path="/edit/:id" element={<AddStudent students={students} setStudents={setStudents} />} />
        </Routes>
      </main>

      <footer className="app-footer">Made By Prashant</footer>
    </div>
  )
}
