import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col bg-slate-900 text-white w-full min-h-screen '>
      <Header />
     
          <Outlet/>
        
      <Footer/>
    </div>
  )
}

export default MainLayout