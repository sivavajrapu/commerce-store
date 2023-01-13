import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './components/pages/ContactUs/ContactUs'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import MockTest from './components/pages/MockTest/MockTest'
import MyProfile from './components/pages/MyProfile/MyProfile'
import NavBar from './components/pages/NavBar/NavBar'
import Practice from './components/pages/Practice/Practice'
import ProductDetails from './components/pages/ProductDetails/ProductDetails'
import Vacancies from './components/pages/Vacancies/Vacancies'

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/product_detail' element={<ProductDetails />}></Route>
        <Route path='/myProfile' element={<MyProfile/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/mock' element={<MockTest/>}></Route>
        <Route path='/practice' element={<Practice/>}></Route>
        <Route path='/vacancies' element={<Vacancies/>}></Route>

      </Routes>
    </>
  )
}
