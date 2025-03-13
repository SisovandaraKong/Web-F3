
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

export default function RootLayoutwithSidebar() {
  return (
    <div className="flex flex-col h-screen">

      <div className='fixed w-full top-0 z-20'>
        <Navbar/>
      </div>
      
      <div className="flex flex-1 pt-[60px]"> 

        <div className='fixed z-10 top-[60px] left-0 h-[calc(100vh-60px)] w-[70px] group hover:w-64 transition-all duration-300 bg-primary'>
          <Sidebar />
        </div>
      
        <main className="flex-1 overflow-y-auto h-[calc(100vh-60px)] ml-[70px] group-hover:ml-64 transition-all duration-300">
          <Outlet />
          
        </main>

      </div>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: '#fff',
            color: '#1c398e', // Match your blue theme
            border: '1px solid #1c398e',
            padding: '12px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          success: {
            style: {
              background: '#10B981', // Green for success
              color: '#fff',
              border: 'none',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#10B981',
            },
          },
          error: {
            style: {
              background: '#EF4444', // Red for error
              color: '#fff',
              border: 'none',
            },
          },
        }}
      />
    </div>
    
  );
}
