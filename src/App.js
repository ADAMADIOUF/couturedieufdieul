import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Slider from './components/Slider'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App