import React from 'react'
import Header from './commonComponent/Header'
import Footer from './commonComponent/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-bootstrap'

export default function RootLayout() {
  return (
    <>
      <Header/>
      <ToastContainer/>
      <Outlet/>
      <Footer/>
      {/* we pass value through outlet component called inside header and footer component that is fixed it will automatically pic demand component and called it */}
    </>
  )
}
