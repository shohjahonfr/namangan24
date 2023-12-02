import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


// pages
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Ozbekiston from './pages/Ozbekiston'
import Dunyo from './pages/Dunyo'
import Siyosat from './pages/Siyosat'
import ShouBiznes from './pages/ShouBiznes'
import Iqtisodiyot from './pages/Iqtisodiyot'
import Sport from './pages/Sport'
import Texnologiyalar from './pages/Texnologiyalar'
import Namangan from './pages/Namangan'
import Sayt from './pages/Sayt'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
  <Route element={<MainLayout/>}>
      <Route index element={<Home/>} />
      <Route path='/Ozbekiston' element={<Ozbekiston/>}/>
      <Route path='/Dunyo' element={<Dunyo/>}/>
      <Route path='/Siyosat' element={<Siyosat/>}/>
      <Route path='/Namangan' element={<Namangan/>}/>
      <Route path='/Shou Biznes' element={<ShouBiznes/>}/>
      <Route path='/Iqtisodiyot' element={<Iqtisodiyot/>}/>
      <Route path='/Sport' element={<Sport/>}/>
      <Route path='/Texnologiyalar' element={<Texnologiyalar/>}/>
      <Route path='/Sayt Haqida' element={<Sayt/>}/>
  </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  
  )
}

export default App