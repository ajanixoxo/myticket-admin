import React, { useState } from 'react';

const Withdrawals = ({ isDark }) => {
  const [withdrawals, setWithdrawals] = useState([
    { id: 1, user: 'Robinson Honour', amount: '$1,000', date: '2024-01-10', method: 'Bank Transfer', status: 'Pending' },
    { id: 2, user: 'Adeoluwa Ayomide', amount: '$500', date: '2024-01-09', method: 'PayPal', status: 'Approved' },
    { id: 3, user: 'Odianonsense Gaybriel', amount: '$2,000', date: '2024-01-08', method: 'Stripe', status: 'Rejected' },
    { id: 4, user: 'Odianonsense Gaybriel', amount: '$700', date: '2024-01-07', method: 'Bank Transfer', status: 'Pending' },
  ]);

  const handleAction = (id, action) => {
    setWithdrawals((prevWithdrawals) =>
      prevWithdrawals.map((withdrawal) =>
        withdrawal.id === id ? { ...withdrawal, status: action } : withdrawal
      )
    );
  };

  return (
    <div className={`p-6 ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
      <h2 className="text-xl font-semibold mb-4">Withdrawals Management</h2>

      {/* Withdrawals Table */}
      <table className="w-full">
        <thead className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
          <tr>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              User
            </th>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Amount
            </th>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Date
            </th>
            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Method
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
          {withdrawals.map((withdrawal) => (
            <tr key={withdrawal.id}>
              <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{withdrawal.user}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{withdrawal.amount}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{withdrawal.date}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{withdrawal.method}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    withdrawal.status === 'Approved'
                      ? isDark
                        ? 'bg-green-900 text-green-300'
                        : 'bg-green-100 text-green-800'
                      : withdrawal.status === 'Rejected'
                      ? isDark
                        ? 'bg-red-900 text-red-300'
                        : 'bg-red-100 text-red-800'
                      : isDark
                      ? 'bg-yellow-900 text-yellow-300'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {withdrawal.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                {withdrawal.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleAction(withdrawal.id, 'Approved')}
                      className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(withdrawal.id, 'Rejected')}
                      className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
                {withdrawal.status !== 'Pending' && (
                  <span
                    className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs`}
                  >
                    No Actions Available
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Withdrawals;
