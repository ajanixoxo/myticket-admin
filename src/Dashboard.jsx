import { useState, useEffect } from 'react'
import { Menu, Eye, Search, Bell, ChevronLeft, ChevronRight, Download, Sun, Moon } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx';


function Dashboard({isDark, isSidebarOpen, handleSideBar, toggleTheme, setIsDark }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)
//   const [sideBar, setSideBar] = useState("-translate-x-full")
//   const handleSideBar = () => {
//       setSideBar(sideBar === '-translate-x-full' ? '' : '-translate-x-full');

//   }
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme')
//     setIsDark(storedTheme === 'dark')
//   }, [])

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     localStorage.setItem('theme', isDark ? 'dark' : 'light')
//   }, [isDark])

//   const toggleTheme = () => {
//     setIsDark(prev => !prev)
//   }

  const stats = [
    { label: 'Total Sales', value: '$400,000', change: '' },
    { label: 'Tickets Sold', value: '30,000', change: '' },
    { label: 'New Events', value: '250', change: '' },
    { label: 'Active Users', value: '15,000', change: '' }
  ]

  const recentTickets = [
    { id: 1, event: 'Summer Music Festival', buyer: 'Robinson Honour', date: '2024-01-10', price: '$150', status: 'Completed' },
    { id: 2, event: 'Tech Conference 2024', buyer: 'Toluwanimi Cpanel', date: '2024-01-09', price: '$200', status: 'Pending' },
    { id: 3, event: 'Comedy Night', buyer: 'Odianonsense ', date: '2024-01-08', price: '$75', status: 'Completed' },
    { id: 4, event: 'Art Exhibition', buyer: 'Adeoluwa Ayomide', date: '2024-01-07', price: '$100', status: 'Completed' },
    { id: 5, event: 'Food Festival', buyer: 'Praise Peculiar', date: '2024-01-06', price: '$50', status: 'Pending' },
  ]



  return (
    <div >
      {/* <Sidebar isDark={isDark} isSidebarOpen={isSidebarOpen} sideBar={sideBar} handleSideBar={handleSideBar}  /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
              <div className="flex items-center justify-between mt-2">
                <p className={`text-2xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{stat.value}</p>
                <span className={`text-sm ${isDark ? 'text-green-400' : 'text-green-600'}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

  
        <div className={`rounded-lg shadow-sm border mb-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
          <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
            <h2 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Recent Tickets</h2>
            <button className={`flex items-center text-sm ${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'
              }`}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>Event</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>Buyer</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>Date</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>Price</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>Status</th>
                  <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{ticket.event}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{ticket.buyer}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{ticket.date}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{ticket.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${ticket.status === 'Completed'
                          ? isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                          : isDark ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'
                        }`}>
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`flex items-center justify-between p-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Showing 5 of 50 entries</p>
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <ChevronLeft className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <ChevronRight className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
        </div>

        
        <div className={`rounded-lg shadow-sm border p-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Additional Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Upcoming Features</h3>
              <ul className={`list-disc list-inside mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Advanced analytics dashboard</li>
                <li>Integration with popular payment gateways</li>
                <li>Mobile app for ticket scanning</li>
                <li>Customizable email templates for ticket confirmations</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>System Requirements</h3>
              <ul className={`list-disc list-inside mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Modern web browser (Chrome, Firefox, Safari, or Edge)</li>
                <li>Stable internet connection</li>
                <li>Minimum screen resolution: 1280x720</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Support</h3>
              <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                For any issues or inquiries, please contact our support team:
              </p>
              <ul className={`list-disc list-inside mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Email: support@ticketadmin.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Live chat: Available 24/7 on our website</li>
              </ul>
            </div>
          </div>
        </div>

   
    </div>

  )
}

export default Dashboard