import React from 'react'
import Header from './comp/Header.jsx'
import Footer from './comp/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Lyout = () => {
  return (
    <div>
        <Header/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Lyout