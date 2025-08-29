import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'

const Navigations = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Navigations
