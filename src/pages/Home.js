import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'
import CTA from "../components/CTA"
import Header from "../components/Header"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Product/>
        <CTA/>
        <Footer/>
    </>
  )
}

export default Home