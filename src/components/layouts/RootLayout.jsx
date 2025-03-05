import React from 'react' 
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
 
export default function RootLayout() {
  return (
    <div>
      <Navbar/>
      {/* <Sidebar/> */}
      <Outlet/>
      <Footer/>
    </div>
  )
}
