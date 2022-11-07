import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}
