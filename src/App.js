import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/// pages
import Home from './pages/Home'
import CartContextProvider from './contexts/CartContext'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </CartContextProvider>
  )
}

export default App