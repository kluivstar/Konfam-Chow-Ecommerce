import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/bgImg.jpg'
const ProductList = ({id, flavors, title, price, description, image, more}) => {
  //const [isHovered, setHovered] = useState(false)
  const [insideButton, setInsideButton] = useState("what's Inside?")

  const handleMouseEnter = () => {
    setInsideButton("Take a Peek")
  }
  const handleMouseLeave = () => {
    setInsideButton("What's Inside?")
  }
  return (
    <div className='z-[10] flex flex-col flex-wrap font-poppins sm:flex-col md:flex-col lg:flex-col bg-orange-100 p-2 rounded py-16 px-10 w-[300px]'>
      
      {/* product img */}
        <div className="relative w-full h-[200px]">
          <img alt="productImage" className=' w-full h-[200px] absolute hover:-mt-4 transition-all object-contain' src={image}/>
        </div>
        <div className='flex flex-row justify-between py-2'>

          {/* product data */}
          <div className="flex flex-col">
            <h1>{title}</h1>
            <span className='text-slate-600'>${price}</span>
            <Link to={`/products/${id}`}class="">
              <button className="bg-slate-800 transition text-white rounded px-2 py-2 hover:bg-slate-600 font-poppins text-[13px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{insideButton}</button>
            </Link>
          </div>
          {/* 
          <div className=''>
            <button className='p-2 bg-gray-800 text-white  hover:border-slate-800 hover:bg-slate-700 rounded text-[13px] hover:text-white  transition-all w-[50px]' >Grab this</button>
          </div>
          */}
        </div>
    </div>
  )
}

export default ProductList