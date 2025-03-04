import React from 'react' 
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

export default function RootLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Sidebar/>
    </div>
  )
}
