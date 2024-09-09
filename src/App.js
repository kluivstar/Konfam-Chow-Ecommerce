import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/// pages
import Home from './pages/Home'
import Productdetails from './pages/ProductDetails'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/id' element={<Productdetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App