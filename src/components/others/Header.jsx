import React, { useState, useEffect } from 'react'

const Header = ({ logginUserData, setUser }) => {
  const [userName, setUserName] = useState('')

  // Use useEffect to update userName when logginUserData changes
  useEffect(() => {
    if (!logginUserData) {
      setUserName('Admin')
    } else {
      setUserName(logginUserData.firstName)
    }
  }, [logginUserData]) // Dependency array ensures this runs only when logginUserData changes

  console.log('Header =>', logginUserData)

  const handleLogout = ()=>{
    localStorage.setItem('loggedInUser', '');
    // window.location.reload()
    setUser('')
  }

  return (
    <div>
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>
          Hello <br />{' '}
          <span className='text-3xl font-bold text-emerald-600'>
            {userName} 👋
          </span>{' '}
        </h1>
        <button onClick={handleLogout} className='bg-red-600 text-lg font-semibold text-white px-5 py-2 rounded-sm cursor-pointer'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Header
