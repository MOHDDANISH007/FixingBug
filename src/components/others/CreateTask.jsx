import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [description, setDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [assignTo, setAssignTo] = useState('')

  const [task, setTask] = useState([])

  console.log("I am From CreateTask", task);


  const handler = (e) => {
    e.preventDefault();
  
    const newTask = {
      taskTitle,
      description,
      taskDate,
      taskCategory,
      assignTo,
      active: true,
      newTask: true,
      completed: false,
      failed: false
    };
  
    setTask([...task, newTask]);
    console.log("New Task => ", newTask);
  
    // Get the data from local storage
    const data = JSON.parse(localStorage.getItem('employees'));
    console.log("I am from CreateTask Component and Data => ", data);
  
    // Update the tasks for the assigned employee
    data.forEach((element) => {
      if (element.firstName === assignTo) {
        element.tasks.push(newTask);
      }
    });
  
    // Save the updated data back to local storage
    localStorage.setItem('employees', JSON.stringify(data));
  
    // Reset the form fields
    setTaskTitle('');
    setDescription('');
    setTaskDate('');
    setTaskCategory('');
    setAssignTo('');
  };


  return (
    <div className='mt-10'>
      <form onSubmit={handler} className='flex flex-wrap gap-5 justify-between'>
        <div className='w-full sm:w-[48%]'>
          <h3 className='text-white font-semibold mb-1'>Task Title</h3>
          <input
            type='text'
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder='Make a UI Design'
            className='w-full p-2 rounded-md border border-gray-400 bg-gray-700 text-white'
          />
        </div>

        <div className='w-full'>
          <h3 className='text-white font-semibold mb-1'>Description</h3>
          <textarea
            cols='30'
            rows='4'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter task description'
            className='w-full p-2 rounded-md border border-gray-400 bg-gray-700 text-white'
          ></textarea>
        </div>

        <div className='w-full sm:w-[48%]'>
          <h3 className='text-white font-semibold mb-1'>Date</h3>
          <input
            type='date'
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className='w-full p-2 rounded-md border border-gray-400 bg-gray-700 text-white'
          />
        </div>

        <div className='w-full sm:w-[48%]'>
          <h3 className='text-white font-semibold mb-1'>Assigned To</h3>
          <input
            type='text'
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            placeholder='Employee Name'
            className='w-full p-2 rounded-md border border-gray-400 bg-gray-700 text-white'
          />
        </div>

        <div className='w-full sm:w-[48%]'>
          <h3 className='text-white font-semibold mb-1'>Category</h3>
          <input
            type='text'
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            placeholder='Design, Dev, etc.'
            className='w-full p-2 rounded-md border border-gray-400 bg-gray-700 text-white'
          />
        </div>

        <button className='w-full sm:w-auto px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition'>
          Create Task
        </button>
      </form>
    </div>
  )
}

export default CreateTask
