// AuthContext.js
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get('refreshToken');
    const type = Cookies.get('user_type');
    console.log(token, "this is a refresh token")
    if (token) {
      setIsAuthenticated(true);
      setUserType(type);
      setUserToken(token)
    }
  }, []);

  const login = (type) => {
    // Cookies.set('auth_token', token);
    Cookies.set('user_type', type);
    setIsAuthenticated(true);
    setUserType(type);
  };

  const logout = () => {
    Cookies.remove('refreshToken'); // Remove refreshToken cookie
    Cookies.remove('user_type');    // Remove user_type cookie
    setIsAuthenticated(false);       // Set isAuthenticated to false
    setUserType(null);               // Set userType to null
    setUserToken(null);              // Optionally, clear userToken if needed
  };

  const setRefreshToken = (refreshToken) => {
    Cookies.set('refreshToken', refreshToken);
  };


  const getRefreshToken = () => {
    const token = Cookies.get('refreshToken');
   return token
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, setRefreshToken, logout, userToken, getRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
