/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { LayoutDashboard, Ticket, Calendar, Users, Settings, LogOut, X, UserPlus,HandCoins } from 'lucide-react'
import AdminDashboard from './../Admin.Dashboard';

function Sidebar({ isDark, isSidebarOpen, handleSideBar, sideBar }) {
    // const [sideBar, setSideBar] = useState("-translate-x-full")
    // const handleSideBar = () => {
    //     setSideBar(sideBar === '-translate-x-full' ? '' : '-translate-x-full');

    // }

    return (
        <div>
            {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" onClick={handleSideBar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-[#B4CD93]">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                </svg>
            </button> */}
            <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${sideBar} ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r w-64 md:translate-x-0`}>
                <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <Link to="/" className="flex items-center space-x-3">
                        {isDark ? <span className={`text-2xl w-14 flex h-auto font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}><img src=" https://myticketseller.com/assets/logo-dark-CBJFyj21.png" alt="" className="" />Admin Dashboard</span> : <span className={`text-2xl  flex w-14 h-auto font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}><img src="https://myticketseller.com/assets/logo-F2TiV86S.png" alt="" className="" /><span className="text-base md:text-xl">Admin Dashboard</span></span>}
                    </Link>
                    <X  onClick={handleSideBar} className="md:hidden flex w-5 h-5 mr-3"/>
                </div>
                <nav className="p-4 space-y-2">
                    <Link to="/" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/payments" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                        <Ticket className="w-5 h-5 mr-3" />
                        <span>Payments</span>
                    </Link>
                    <Link to="/manage-admin" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                        <UserPlus className="w-5 h-5 mr-3" />
                        <span>Manage Admin</span>
                    </Link>
                    <Link to="/withdrawls" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                        <HandCoins className="w-5 h-5 mr-3" />
                        <span>Withdrawals</span>
                    </Link>
                    <Link to="/users" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                        <Users className="w-5 h-5 mr-3" />
                        <span>Users</span>
                    </Link>
                    <Link to="/settings" className={`flex items-center p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                        <Settings className="w-5 h-5 mr-3" />
                        <span>Settings</span>
                    </Link>
                    <button className={`flex items-center w-full p-3 rounded-lg ${isDark ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                        <LogOut className="w-5 h-5 mr-3" />
                        <span>Logout</span>
                    </button>
                </nav>
            </aside></div>


    )
}

export default Sidebar