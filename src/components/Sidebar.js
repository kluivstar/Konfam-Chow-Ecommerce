import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import useLocalStorageState from 'use-local-storage-state';

const Sidebar = () => {
      // Gets the products and cart from context
    const [cart, setCart, cartToggle, setCartToggle] = useContext(CartContext)
    const [cartCount, setCartCount] = useState(false)

    const handleIncreaseCount = () =>{
        setCartCount((prev) => prev + 1)
    }
    const handleDecreaseCount = () =>{
        setCartCount((prev) => prev - 1)
    }
    return (
        <section className=''>
            <div
                className={`${
                cartToggle ? "flex" : "hidden"
                } absolute flex-col w-[400px] right-1 p-5 mt-4 top-20 transition-all bg-primary`} 
                // Set max height and enable vertical scrolling
                style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
                
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div className='flex flex-row bg-primary p-10 gap-10'>
                            <div className="">
                                <img className='w-[700px]' alt='' src={item.image}/>
                            </div>
                            <div className="">
                                <h1 className='text-slate-50 text-[19px]'>{item.title}</h1>
                                <span className='text-slate-200 text-[12px]'>{item.description}</span>
                                <div>
                                    <div className='flex gap-6'>
                                        <button onClick={handleIncreaseCount} type="" className="px-2 text-white hover:bg-slate-500 bg-slate-600 rounded-md">+</button>
                                        {cartCount}
                                        <button onClick={handleDecreaseCount} type="" className="px-2 text-white hover:bg-slate-500 bg-slate-600 rounded-md">-</button>
                                    </div>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        </div>
                        ))
                ) : (
                    <div className='text-center text-white'>Your cart is empty.</div>
                    )}
                </div>
                
        </section>
    )
}

export default Sidebar