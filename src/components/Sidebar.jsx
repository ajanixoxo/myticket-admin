import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { LayoutDashboard, Ticket, Calendar, Users, Settings, LogOut} from 'lucide-react'
import AdminDashboard from './../Admin.Dashboard';

function Sidebar({isDark, isSidebarOpen}) {
    

  return (
    <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r w-64 md:translate-x-0`}>
    <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <Link href="/" className="flex items-center space-x-3">
        
        {isDark ?<span className={`text-2xl w-14 flex h-auto font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}><img src=" https://myticketseller.com/assets/logo-dark-CBJFyj21.png" alt="" className=""  />Admin Dashboard</span>: <span className={`text-2xl  flex w-14 h-auto font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}><img src="https://myticketseller.com/assets/logo-F2TiV86S.png" alt="" className=""  />Admin Dashboard</span>}
        
       
      </Link>
    </div>
    <nav className="p-4 space-y-2">
      <Link href="/dashboard" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
        <LayoutDashboard className="w-5 h-5 mr-3" />
        <span>Dashboard</span>
      </Link>
      <Link href="/tickets" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
        <Ticket className="w-5 h-5 mr-3" />
        <span>Tickets</span>
      </Link>
      <Link href="/events" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
        <Calendar className="w-5 h-5 mr-3" />
        <span>Events</span>
      </Link>
      <Link href="/users" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
        <Users className="w-5 h-5 mr-3" />
        <span>Users</span>
      </Link>
      <Link href="/settings" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
        <Settings className="w-5 h-5 mr-3" />
        <span>Settings</span>
      </Link>
      <button className={`flex items-center w-full p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
        <LogOut className="w-5 h-5 mr-3" />
        <span>Logout</span>
      </button>
    </nav>
  </aside>

  )
}

export default Sidebar