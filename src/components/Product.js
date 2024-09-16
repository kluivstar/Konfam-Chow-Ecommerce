import React from 'react'
import {products} from "../constants"
import ProductList from '../pages/ProductList'

const Product = () => {
  return (
    <section>
      Products-
      <div>
          {products.map((product) => 
            <ProductList
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                more={product.more}
                flavors={product.flavors}
            />
          )}
      </div>
    </section>
  )
}

export default Product