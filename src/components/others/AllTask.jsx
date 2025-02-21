import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvide'

const AllTask = () => {
  const authData = useContext(AuthContext)
  console.log(authData.userData.employees)

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 overflow-x-auto custom-scrollbar">
      <table className="min-w-full border border-emerald-500 bg-[#1c1c1c]">
        {/* Table Header */}
        <thead className="bg-red-400 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Employee Name</th>
            <th className="py-2 px-4 text-center">New Task</th>
            <th className="py-2 px-4 text-center">Active Task</th>
            <th className="py-2 px-4 text-center">Completed</th>
            <th className="py-2 px-4 text-center">Failed</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {authData.userData.employees.map((elem, idx) => (
            <tr key={idx} className="border-b border-emerald-500 text-white">
              <td className="py-2 px-4">{elem.firstName}</td>
              <td className="py-2 px-4 text-center text-blue-400">{elem.taskNumbers.newTask}</td>
              <td className="py-2 px-4 text-center text-yellow-400">{elem.taskNumbers.active}</td>
              <td className="py-2 px-4 text-center text-green-400">{elem.taskNumbers.completed}</td>
              <td className="py-2 px-4 text-center text-red-600">{elem.taskNumbers.failed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllTask
