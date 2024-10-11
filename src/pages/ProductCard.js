import React, { useContext } from 'react'
import ProductList from './ProductList'
import styles from '../constants/style'
import { CartContext } from '../contexts/CartContext'

const ProductCard = () => {
  const [products, setProducts] = useContext(CartContext)
  return (
    <section className={`bg-gray-200 ${styles.paddingY} ${styles.paddingX} m-auto text-center`}>
      <div className="p-10 z-[30">
        <h1 className="">Glance at our menu:</h1>
      </div>
      <div className={`flex sm:flex-row justify-center gap-10 flex-wrap m-auto items-center`} >
          {products.map((product) => 
            <ProductList
                key={product.id}
                id={product.id}
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

export default ProductCard