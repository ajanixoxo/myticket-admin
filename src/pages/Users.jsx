import React, { useState } from 'react';

const Users = ({ isDark }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Odianonsense Gaybriel', email: 'bigguy@example.com', date: '2024-01-05', status: 'Active' },
    { id: 2, name: 'Adeoluwa Ayomide', email: 'bigguyexample.com', date: '2024-01-03', status: 'Suspended' },
    { id: 3, name: 'Adeoluwa Ayomide', email: 'bigguy@example.com', date: '2024-01-02', status: 'Active' },
    { id: 4, name: 'Adeoluwa Ayomide', email: 'bigguya@example.com', date: '2024-01-01', status: 'Active' },
  ]);

  const handleAction = (id, action) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: action } : user
      )
    );
  };

  return (
    <div className={`p-6 ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
      <h2 className="text-xl font-semibold mb-4">Users Management</h2>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Name
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Email
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Registration Date
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Status
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {users.map((user) => (
              <tr key={user.id}>
                <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{user.name}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{user.email}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{user.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'Active'
                        ? isDark
                          ? 'bg-green-900 text-green-300'
                          : 'bg-green-100 text-green-800'
                        : isDark
                        ? 'bg-red-900 text-red-300'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  {user.status === 'Active' && (
                    <button
                      onClick={() => handleAction(user.id, 'Suspended')}
                      className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Suspend
                    </button>
                  )}
                  {user.status === 'Suspended' && (
                    <button
                      onClick={() => handleAction(user.id, 'Active')}
                      className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Reactivate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
