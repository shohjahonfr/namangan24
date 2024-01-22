import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Reklama from '../img/reklama.jpg'

const MainLayout = () => {
  return (
    <div className='flex flex-col   min-h-screen'>
      <Header />
      <a href="https://pc.uz/company/123924-shopme-uz"target="_blank">
      <img src={Reklama} className='w-full max-w-[1480px] mx-auto px-5 mb-10 mt-5 h-20 sm:h-32' alt="" />
      </a>
      <main className=' w-full max-w-[1480px] mx-auto px-5 grow font-bold text-2xl'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout