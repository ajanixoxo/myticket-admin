/* eslint-disable no-unused-vars */
import React from "react";

const Payments = ({isDark}) => {
  const paymentData = [
    {
      event: "Summer Music Festival",
      buyer: "Robinson Honour",
      date: "2024-01-10",
      amount: "$150",
      status: "Completed",
    },
    {
      event: "Tech Conference 2024",
      buyer: "Toluwanimi Cpanel",
      date: "2024-01-09",
      amount: "$200",
      status: "Pending",
    },
    {
      event: "Comedy Night",
      buyer: "Odianosense",
      date: "2024-01-08",
      amount: "$75",
      status: "Completed",
    },
    {
      event: "Art Exhibition",
      buyer: "Adeoluwa Ayomide",
      date: "2024-01-07",
      amount: "$100",
      status: "Completed",
    },
    {
      event: "Food Festival",
      buyer: "Praise Peculiar",
      date: "2024-01-06",
      amount: "$50",
      status: "Pending",
    },
  ];

  return (
    <div className="p-4 sm:p-6 ">
      <div className={`rounded-lg shadow-sm border mb-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
        <h2 className={`text-lg font-semibold pt-4 pl-3 text-gray-800 ${isDark? 'text-white' : 'text-black'} mb-4`}>
          Payments
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
              <tr className="">
                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                  Event
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                  Buyer
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                  Date
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                  Amount
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {paymentData.map((payment, index) => (
                <tr
                  key={index}
                  
                >
                  <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {payment.event}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {payment.buyer}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {payment.date}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {payment.amount}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        payment.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
