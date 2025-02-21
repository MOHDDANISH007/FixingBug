import React, { useContext, useEffect, useState } from 'react'
import { Login } from './components/Auth/Login.jsx'
import './App.css'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard.jsx'
import AdminDashBoard from './components/Dashboard/AdminDashBorad.jsx'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage.jsx'
import { AuthContext } from './context/AuthProvide.jsx'

export const App = () => {
  const [user, setUser] = useState(null)
  const [logginUserData, setLogginUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   console.log('LogginUserData is =>', logginUserData)
  // }, [logginUserData])

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLogginUserData(userData.data)
    }
  }, [])

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  })

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      const adminUser = { role: 'admin', firstName: 'Admin' }
      setUser('admin')
      setLogginUserData(adminUser)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.userData?.employees?.find(
        e => e.email === email && e.password === password
      )
      if (employee) {
        setUser('employee')
        setLogginUserData(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
      } else {
        alert('Invalid Credentials')
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  useEffect(() => {
    if (authData?.userData) {
      console.log('Employees Data=>', authData.userData.employees)
      console.log('Admin Data=>', authData.userData.admin)
    } else {
      console.log('User data is not yet loaded.')
    }
  }, [authData])

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashBoard logginUserData={logginUserData} setUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashBoard logginUserData={logginUserData} setUser={setUser} />
      ) : null}
    </>
  )
}
