import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


// pages
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Dunyo from './pages/Dunyo'
import Iqtisodiyot from './pages/Iqtisodiyot'
import Sport from './pages/Sport'
import Texnologiyalar from './pages/Texnologiyalar'
import Birja from './pages/Birja'
import Asosiy from './pages/Asosiy'
import Post from './pages/Post'
import Kop from './pages/Kop'
import Contact from './pages/Contact'
import Madaniyat from './pages/Madaniyat'
import Xatolar from './pages/Xatolar'
import Molia from './pages/Molia'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
  <Route element={<MainLayout/>}>
      <Route index element={<Home/>} />
      <Route path='/Asosiy' element={<Asosiy/>}/>
      <Route path='/Dunyo' element={<Dunyo/>}/>
      <Route path='/Molia' element={<Molia/>}/>
      <Route path='/Birja' element={<Birja/>}/>
      <Route path='/Madaniyat' element={<Madaniyat/>}/>

      <Route path='/Iqtisodiyot' element={<Iqtisodiyot/>}/>
      <Route path='/Sport' element={<Sport/>}/>
      <Route path='/Texnologiyalar' element={<Texnologiyalar/>}/>
      <Route path='/Post/:id' element={<Post/>}/>
      <Route path='/Kop' element={<Kop/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<Xatolar/>}/>
  </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  
  )
}

export default App