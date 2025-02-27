import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import Navbar from './Navbar';
export default function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`flex ${isDarkMode ? 'dark' : ''}`}>
      <SideMenu />
      <div className="flex-1">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <Outlet /> 
      </div>
    </div>
  );
}