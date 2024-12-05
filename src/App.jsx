import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AdminDashboard from './Admin.Dashboard'
import Dashboard from './Dashboard'
import Payments from './pages/Payments'
import AdminManagement from './pages/Admin'
import Withdrawals from './pages/Withdrawals'
import Users from './pages/Users'
function App() {
  const [count, setCount] = useState(0)

    const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    setIsDark(storedTheme === 'dark')
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard isDark={isDark} setIsDark={setIsDark}  toggleTheme={toggleTheme}  />}>
          <Route  index element={<Dashboard isDark={isDark} setIsDark={setIsDark} toggleTheme={toggleTheme}  />} />
          <Route path="payments" element={<Payments  isDark={isDark} setIsDark={setIsDark}  toggleTheme={toggleTheme} />} />
          <Route path="manage-admin" element={<AdminManagement isDark={isDark} />} />
          <Route path="withdrawls" element={<Withdrawals isDark={isDark} />}  />
          <Route path="users" element={<Users isDark={isDark}/>} />
          <Route path="settings" element={<h1>Settings Page</h1>} />

        </Route>

      </Routes>

    </>
  )
}

export default App
