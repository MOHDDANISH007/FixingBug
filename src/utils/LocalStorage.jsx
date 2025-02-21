localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: 'Amit',
    email: 'employee1@example.com',
    password: '123',
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Submit Report',
        taskDescription: 'Prepare and submit the monthly sales report.',
        taskDate: '2025-02-16',
        endTaskDate: '2025-02-18',
        taskCategory: 'Reporting',
        taskPriority: 'High'
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Client Meeting',
        taskDescription: 'Discuss project updates with the client.',
        taskDate: '2025-02-17',
        endTaskDate: '2025-02-17',
        taskCategory: 'Meetings',
        taskPriority: 'Medium'
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: 'Rajesh',
    email: 'employee2@example.com',
    password: '123',
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Code Review',
        taskDescription: 'Review code submitted by the development team.',
        taskDate: '2025-02-15',
        endTaskDate: '2025-02-16',
        taskCategory: 'Development',
        taskPriority: 'High'
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Team Standup',
        taskDescription: 'Attend the daily standup meeting.',
        taskDate: '2025-02-16',
        endTaskDate: '2025-02-16',
        taskCategory: 'Meetings',
        taskPriority: 'Low'
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Fix Bugs',
        taskDescription: 'Resolve issues reported in the bug tracker.',
        taskDate: '2025-02-18',
        endTaskDate: '2025-02-20',
        taskCategory: 'Development',
        taskPriority: 'High'
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: 'Vikram',
    email: 'employee3@example.com',
    password: '123',
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Design Mockups',
        taskDescription: 'Create new UI mockups for the dashboard.',
        taskDate: '2025-02-20',
        endTaskDate: '2025-02-22',
        taskCategory: 'Design',
        taskPriority: 'Medium'
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Training Session',
        taskDescription: 'Attend an online training session on React.js.',
        taskDate: '2025-02-14',
        endTaskDate: '2025-02-14',
        taskCategory: 'Training',
        taskPriority: 'Low'
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: 'Neha',
    email: 'employee4@example.com',
    password: '123',
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Deployment',
        taskDescription: 'Deploy the latest app version to production.',
        taskDate: '2025-02-13',
        endTaskDate: '2025-02-14',
        taskCategory: 'Operations',
        taskPriority: 'High'
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Security Audit',
        taskDescription: 'Perform a security audit for the application.',
        taskDate: '2025-02-19',
        endTaskDate: '2025-02-21',
        taskCategory: 'Security',
        taskPriority: 'High'
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: 'Priya',
    email: 'employee5@example.com',
    password: '123',
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Write Blog Post',
        taskDescription:
          'Draft a technical blog post on JavaScript best practices.',
        taskDate: '2025-02-21',
        endTaskDate: '2025-02-23',
        taskCategory: 'Content',
        taskPriority: 'Medium'
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'SEO Optimization',
        taskDescription:
          'Optimize the company website for better search rankings.',
        taskDate: '2025-02-22',
        endTaskDate: '2025-02-24',
        taskCategory: 'Marketing',
        taskPriority: 'Low'
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  }
  
];

const admin = [
  {
    id: 1,
    firstName: 'Arjun',
    email: 'admin@example.com',
    password: '123'
  }
];





// Store data in localStorage
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

// Retrieve data from localStorage
export const getLocalStorage = () => {
  const storedEmployees = localStorage.getItem('employees')
  const storedAdmin = localStorage.getItem('admin')
  

  return {
    employees: storedEmployees ? JSON.parse(storedEmployees) : [],
    admin: storedAdmin ? JSON.parse(storedAdmin) : []
  }
}

console.log("Employee Data: ",employees)
console.log("Admin Data: ",admin)
