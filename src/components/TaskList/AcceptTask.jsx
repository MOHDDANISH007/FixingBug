import React from 'react'

const AcceptTask = ({task}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 p-5 rounded-xl'>
      <div className='flex justify-between item-center'>
        <h3 className='bg-red-600 px-4 py-2 rounded font-semibold'>{task.taskCategory}</h3>
        <h4 className='text-sm text-gray-900 font-bold'>{task.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-xl font-bold'>{task.taskTitle}</h2>
      <p className='text-sm mt-2 font-semibold'>
        {task.taskDescription}
      </p>

      <div className='flex justify-between mt-4'>
        <button className='bg-green-700 py-1 px-2 text-sm rounded cursor-pointer'>Mark as Completed</button>
        <button className='bg-green-700 py-1 px-2 text-sm rounded cursor-pointer'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
