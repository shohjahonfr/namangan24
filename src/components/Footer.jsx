import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Telegram from '../img/telegram.svg'
const Footer = () => {
  return (
    <footer className='bg-blue-700'>

    <div className=' w-full max-w-7xl mx-auto px-5 pb-32 py-5 '>
      <div className='border-b flex justify-between items-center pb-3 '>

      <div className=''>
      <NavLink className='text-white text-xl font-bold  p-1 rounded-md bg-blue-900 ' to="/">NAMANGANLIKLAR 24</NavLink>
      </div>
      <div className='flex items-center'>
        <span className='inline-bloc items-center mr-5 '>Bizning telegram kanalimizga obuna bo’lib eng so’nggi yangiliklardan xabardor bo’ling:</span>
        <a href="https://t.me/NAMANGANLIKLAR" className='p-1 bg-white inline-block rounded-md'>
              <div className='flex p-1 bg-white text-blue-900 '>
                <img src={Telegram} className='w-6' alt="" />
                Obuna Bo'lish
              </div>
            </a>
      </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <span>Foydalanish huquqlari</span>
          <p>«NAMANGANLIKLAR24.UZ» saytida eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.</p>
        </div>
        <div>
        <NavLink className="hover:text-blue-600 active:text-blue-900 " to="/Sayt Haqida">Sayt Haqida</NavLink>  
        </div>
        <div>
          <span>Ma'lumotlardan foydalanish</span>
        </div>
          <div>
            <p>Bizni kuzatib boring</p>
            <a href="https://t.me/NAMANGANLIKLAR" className='p-1 bg-white inline-block rounded-md'>
              <div className='flex p-1 bg-white text-blue-900 hover:bg-black'>
                <img src={Telegram} className='w-6' alt="" />
                Bizning Telegram kanal
              </div>
            </a>
          </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer