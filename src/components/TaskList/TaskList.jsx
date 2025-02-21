import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({ logginUserData }) => {
  console.log('TaskList=>', logginUserData);

  // Handle cases where logginUserData or tasks is undefined
  if (!logginUserData || !logginUserData.tasks) {
    return <div>No tasks available.</div>;
  }

  return (
    <div
      id='TaskList'
      className='flex items-center overflow-x-auto justify-start flex-nowrap gap-5 h-[50%] w-full mt-10 sm:h-[70%] md:h-[45%] lg:h-[70%] xl:h-[70%]'
    >
      {logginUserData.tasks.map((task, index) => {
        if (task.newTask) {
          return <NewTask key={index} task={task} data = {task} />;
        } else if (task.completed) {
          return <CompleteTask key={index} task={task} data = {task}/>;
        } else if (task.failed) {
          return <FailedTask key={index} task={task} data = {task}/>;
        } else if (task.active) {
          return <AcceptTask key={index} task={task} data = {task}/>;
        } else {
          return null; // Handle cases where no condition matches
        }
      })}
    </div>
  );
};

export default TaskList;