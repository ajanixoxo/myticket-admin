import React, { useState } from 'react';

const AdminManagement = ({ isDark }) => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Robinson Honour', email: 'jigguy@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Adeoluwa Ayomide', email: 'bigguye@example.com', role: 'Admin', status: 'Inactive' },
    { id: 3, name: 'Odianonsense Gaybriel', email: 'chris@example.com', role: 'Super Admin', status: 'Active' },
  ]);

  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', role: 'Admin' });

  const handleInputChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  const handleAddAdmin = () => {
    setAdmins([...admins, { ...newAdmin, id: admins.length + 1, status: 'Active' }]);
    setNewAdmin({ name: '', email: '', role: 'Admin' });
  };

  return (
    <div className={`p-6 ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
      <h2 className="text-xl font-semibold mb-4">Admin Management</h2>

      
      <div className="mb-6 flex flex-wrap gap-4 overflow-x-auto">
        <input
          type="text"
          name="name"
          value={newAdmin.name}
          onChange={handleInputChange}
          placeholder="Admin Name"
          className={`px-4 py-2 border rounded-md ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
        />
        <input
          type="email"
          name="email"
          value={newAdmin.email}
          onChange={handleInputChange}
          placeholder="Admin Email"
          className={`px-4 py-2 border rounded-md ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
        />
        <select
          name="role"
          value={newAdmin.role}
          onChange={handleInputChange}
          className={`px-4 py-2 border rounded-md ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
        >
          <option value="Admin">Admin</option>
          <option value="Super Admin">Super Admin</option>
        </select>
        <button
          onClick={handleAddAdmin}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Admin
        </button>
      </div>

      <div className='overflow-x-auto'>
      <table className="w-full">
        <thead className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
          <tr>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Name</th>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</th>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Role</th>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Status</th>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Action</th>
          </tr>
        </thead>
        <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{admin.name}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{admin.email}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{admin.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${admin.status === 'Active'
                    ? isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                    : isDark ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'
                  }`}>
                  {admin.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'}`}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AdminManagement;
