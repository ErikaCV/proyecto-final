import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
console.log("userdata", userData)
const navigate = useNavigate();

const logout = () => {
    
    setUserData(null);
    localStorage.removeItem('token');
    navigate('/login');
  
  };
  return (
    <UserContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};
