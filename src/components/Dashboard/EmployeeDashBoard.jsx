import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = ({logginUserData, setUser}) => {
  console.log(logginUserData)
    return (
      <div className='p-10 bg-[#1c1c1c] h-screen overflow-auto'>
        <Header logginUserData={logginUserData} setUser={setUser} />
        <TaskListNumber logginUserData={logginUserData} />
        <TaskList logginUserData={logginUserData} />
        <h1>EmployeeDashBoard</h1>
        <h1>lorem200</h1>
      </div>
    );
  };
  

export default EmployeeDashBoard
