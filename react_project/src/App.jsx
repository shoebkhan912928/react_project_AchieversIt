import React from 'react'
import Practice from './Practice.jsx'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Navigations from './navigations/Navigations.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />

      <Header />
      {/* <Home/> */}
      <Navigations />
      <Footer />
      {/* <Cart/> */}
    </div>
  )
}

export default App
