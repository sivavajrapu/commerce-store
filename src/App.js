import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/pages/Cart/Cart'
import Home from './components/pages/Home/Home'
import MyProfile from './components/pages/MyProfile/MyProfile'
import NavBar from './components/pages/NavBar/NavBar'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product_detail' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/myProfile' element={<MyProfile/>}></Route>
      </Routes>
    </>
  )
}
