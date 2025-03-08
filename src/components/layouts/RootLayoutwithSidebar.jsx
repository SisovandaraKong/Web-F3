
import React from 'react';
import NavbarLogin from './NavbarLogin';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';
import Footer from './Footer';

export default function RootLayoutwithSidebar() {
  return (
    <div className="flex flex-col h-screen">

      <div className='fixed w-full top-0 z-20'>
        <NavbarLogin/>
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
    </div>
    
  );
}
