import React from 'react'

const ProductList = ({flavors, title, price, description, image, more}) => {
  return (
    <div className='flex flex-col font-poppins sm:flex-row'>
        <img alt='' src={image}/>
        <div className='flex flex-col'>
          <h1>{title}</h1>
          <span>{price}</span>
        </div>
    </div>
  )
}

export default ProductList