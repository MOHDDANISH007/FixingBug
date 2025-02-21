import React, { createContext, useState, useEffect } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvide = ({ children }) => {
  localStorage.clear();
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage(); 
    const {employees, admin} = getLocalStorage();
    console.log("Retrieved Data:", employees, admin);
    setUserData({employees, admin});
  }, []);

  return (
    <AuthContext.Provider value={{ userData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvide;
