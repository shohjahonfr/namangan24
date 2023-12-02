import React from 'react'
import Telegram from '../img/telegram.svg'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (

    <header className='py-5  sticky top-0 bg-zinc-200'>
      <div>

        <div className=" justify-between items-center w-full max-w-7xl mx-auto px-5 drop-shadow-xl ">
          <nav className='flex items-center justify-between'>
            <NavLink className='text-blue-600 text-2xl font-bold  p-1 bg-white rounded-md' to="/">NAMANGANLIKLAR 24</NavLink>
            <div className='flex items-center'>
              <span className='text-blue-600 mr-2 font-semibold '>$ </span><p className='text-slate-500 mr-4'>12315.00</p>
              <span className='text-blue-600 mr-2 font-semibold'>P </span><p className='text-slate-500 mr-4'>138.99</p>
              <span className='text-blue-600 mr-2 font-semibold'>E </span><p className='text-slate-500'> 13496.92</p>

              <input className='p-2 border rounded-lg ml-4 text-gray-800' type="text"  />

            </div>
            <a href="https://t.me/NAMANGANLIKLAR" className='p-1 bg-blue-400 inline-block rounded-md'>

             

              <div className='flex p-1 bg-blue-400 '>
                <img src={Telegram} className='w-6' alt="" />
                Obuna Bo'lish
              </div>
            </a>
          </nav>
        </div>

        <div className='w-full max-w-7xl mx-auto px-5  drop-shadow-xl '>
          <div className='py-6 mt-5 text-[#7F7F7F] text-xl bg-white rounded-md space-x-16 px-8 font-semibold '>

            <NavLink className="hover:text-blue-600 active:text-blue-900  " to="/Ozbekiston">O'zbekiston</NavLink>
            <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Dunyo">Dunyo</NavLink>
            <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Siyosat">Siyosat</NavLink>
            <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Namangan">Namangan</NavLink>
            <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Shou Biznes">Shou Biznes</NavLink>
            <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Iqtisodiyot">Iqtisodiyot</NavLink>
            <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Sport ">Sport</NavLink>
            <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Texnologiyalar">Texnologiyalar</NavLink>
          </div>
        </div>
      </div>
    </header>

    // yangiliklar

  )
}

export default Header