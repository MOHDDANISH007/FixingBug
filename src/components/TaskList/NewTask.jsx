import React from 'react'

const NewTask = ({task}) => {
  console.log("NewTask=>",task)
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 p-5 rounded-xl'>
      <div className='flex justify-between item-center'>
        <h3 className='bg-red-600 px-4 py-2 rounded font-semibold'>{task.taskCategory}</h3>
        <h4 className='text-sm text-gray-900 font-bold'>{task.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-xl font-bold'>{task.taskTitle}</h2>
      <p className='text-sm mt-2 font-semibold'>
        {task.taskDescription}
      </p>

      <div className='mt-4'>
        <button className='bg-blue-500 py-1 px-2  w-full text-sm rounded cursor-pointer'>Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask
