import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import Header from "../components/Header"
import Footer from "../components/Footer"
import style from '../constants/style'

//  Component fetches the product data based on the ID in the URL:
const ProductDetails = () => {
  // Gets the product ID from URL
  const {id} = useParams() 

  // Gets the products and cart from context
  const [products, setProducts, cart, setCart, addToCart] = useContext(CartContext)

  //Find products by ID
  const product = products.find((prod) => prod.id === parseInt(id))

  return (
    <div>
      <Header/>
      <div id="productDetails" className={`pt-[100px] container flex flex-col sm:gap-20 sm:flex-col md:flex-col justify-between lg:flex-col z-20 leading-7 xl:flex-row font-poppins xl:px-10`}>

        <div class="">
          {/* Gradient */}
        <div className='absolute z-[0] w-[50%] h-[50%] left-10 bottom-0 top-10 blue__gradient md:bottom-0 md:absolute'></div>
          <img className='z-[10] relative p-10 xl:mt-20 xl:w-[500px]' alt="" src={product.image}/>
        </div>
        <div className="z-[10] flex flex-col items-start sm:mt-10 sm:w-[600px] p-10">
          <h2 className="text-[16px] sm:mt-[120px]">{product.title}</h2>
          <p className='text-primary pb-10'>{product.description}</p>
          <span className='text-slate-900' >Price: ${product.price}</span>
          <p className='text-[13px] text-slate-600'>Flavours: {product.flavors}</p>
          <button className="bg-slate-800 transition text-white rounded px-2 py-2 hover:bg-slate-600 font-poppins text-[13px]" onClick={()=> addToCart(product)}>Grab This</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetails