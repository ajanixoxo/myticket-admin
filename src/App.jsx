import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AdminDashboard from './Admin.Dashboard'
import Dashboard from './Dashboard'
import Payments from './pages/Payments'
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
          <Route path="manage-admin" element={<h1>Mannge Admin Page</h1>} />
          <Route path="withdrawls" element={<h1>Withdrawls Page</h1>} />
          <Route path="users" element={<h1>Uses Page</h1>} />
          <Route path="settings" element={<h1>Settings Page</h1>} />

        </Route>

      </Routes>

    </>
  )
}

export default App
