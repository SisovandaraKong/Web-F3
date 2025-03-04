import React from 'react' 
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
 
export default function RootLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
