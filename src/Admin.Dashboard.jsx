import { useState, useEffect } from 'react'
import { Menu, Eye, Search, Bell, ChevronLeft, ChevronRight, Download, Sun, Moon } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx';
import { Outlet } from "react-router-dom";

function AdminDashboard({isDark, setIsDark, toggleTheme}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [sideBar, setSideBar] = useState("-translate-x-full")
  const handleSideBar = () => {
      setSideBar(sideBar === '-translate-x-full' ? '' : '-translate-x-full');

  }
  // const [isDark, setIsDark] = useState(false)

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme')
  //   setIsDark(storedTheme === 'dark')
  // }, [])

  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  //   localStorage.setItem('theme', isDark ? 'dark' : 'light')
  // }, [isDark])

  // const toggleTheme = () => {
  //   setIsDark(prev => !prev)
  // }

  // const stats = [
  //   { label: 'Total Sales', value: '$400,000', change: '' },
  //   { label: 'Tickets Sold', value: '30,000', change: '' },
  //   { label: 'New Events', value: '250', change: '' },
  //   { label: 'Active Users', value: '15,000', change: '' }
  // ]

  // const recentTickets = [
  //   { id: 1, event: 'Summer Music Festival', buyer: 'Robinson Honour', date: '2024-01-10', price: '$150', status: 'Completed' },
  //   { id: 2, event: 'Tech Conference 2024', buyer: 'Toluwanimi Cpanel', date: '2024-01-09', price: '$200', status: 'Pending' },
  //   { id: 3, event: 'Comedy Night', buyer: 'Odianonsense ', date: '2024-01-08', price: '$75', status: 'Completed' },
  //   { id: 4, event: 'Art Exhibition', buyer: 'Adeoluwa Ayomide', date: '2024-01-07', price: '$100', status: 'Completed' },
  //   { id: 5, event: 'Food Festival', buyer: 'Praise Peculiar', date: '2024-01-06', price: '$50', status: 'Pending' },
  // ]



  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <Sidebar isDark={isDark} isSidebarOpen={isSidebarOpen} sideBar={sideBar} handleSideBar={handleSideBar}  />

      <div className={`p-4 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
    
        <div className="mb-6 flex items-center justify-between">
          <button onClick={handleSideBar} className="md:hidden">
            <Menu className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
          </button>
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                placeholder="Search events, tickets..."
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'
                  }`}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button className="relative">
              <Bell className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <img
              src="https://robinsonhonour.me/assets/banner-me-CAcJU0bk.png"
              alt="Admin"
              className="w-14 h-auto rounded-full"
            />
          </div>
        </div>
        <Outlet />


        

      </div>
    </div>

  )
}

export default AdminDashboard