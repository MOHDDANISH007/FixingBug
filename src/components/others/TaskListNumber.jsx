import React from 'react'

const TaskListNumber = ({logginUserData}) => {
    console.log("TaskListNumber=>",logginUserData)
  return (
    <div className='flex mt-10 justify-between gap-5 flex-wrap'>
        <div className="rounded-xl w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] px-10 py-9 bg-red-400">
            <h2 className='text-3xl'>{logginUserData.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className="rounded-xl w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] px-10 py-9 bg-blue-400">
            <h2 className='text-3xl'>{logginUserData.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>

        <div className="rounded-xl w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] px-10 py-9 bg-green-400">
            <h2 className='text-3xl'>{logginUserData.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>

        <div className="rounded-xl w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] px-10 py-9 bg-yellow-400">
            <h2 className='text-3xl'>{logginUserData.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
