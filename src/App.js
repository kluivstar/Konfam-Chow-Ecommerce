import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/// pages
import Home from './pages/Home'
import Productdetails from './pages/ProductDetails'

/// components 
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/id' element={<Productdetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App