import React, { createContext, useContext, useState, useEffect } from 'react';
import { login, refreshToken } from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app load
  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          // Optionally fetch user profile to verify token
          setUser({ isLoggedIn: true });
        } catch (error) {
          console.error('Token invalid or expired:', error);
          await handleRefreshToken();
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const data = await login(email, password);
      setUser({ isLoggedIn: true, ...data });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  const handleRefreshToken = async () => {
    try {
      await refreshToken();
      setUser({ isLoggedIn: true });
    } catch (error) {
      console.error('Token refresh failed:', error);
      handleLogout();
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);