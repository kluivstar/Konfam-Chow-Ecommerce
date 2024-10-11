import React, { createContext } from 'react'
import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state';

import {burger1,
    burger2,
    burger3,
    burger4,
    burger5,
    burger7,
    burger8} from "../assets"


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    // State for cart
    const [cart, setCart] = useLocalStorageState("cart", { defaultValue: []})

    // Cart toggle
    const [cartToggle, setCartToggle] = useState(false)

    // Function to add a product to cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product])
        console.log(cart)
    }

    // State for products
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Classic Cheeseburger",
            description: "A timeless burger with a juicy beef patty, melted cheddar cheese, crisp lettuce, tomato, and our signature sauce.",
            price: 8.99,
            flavors: ["Beef", "Cheese", "Signature Sauce"],
            more: "Available with gluten-free buns",
            image: burger1
        },

        {
            id: 2,
            title: "Spicy Jalapeño Burger",
            description: "Kick up the heat with this fiery burger loaded with jalapeños, pepper jack cheese, and spicy mayo.",
            price: 9.99,
            flavors: ["Beef", "Jalapeño", "Spicy Mayo"],
            more: "Add extra jalapeños for free!",
            image: burger2
        },

        {
            id: 3,
            title: "BBQ Bacon Burger",
            description: "A smoky BBQ masterpiece with crispy bacon, cheddar cheese, onion rings, and a sweet BBQ sauce.",
            price: 10.99,
            flavors: ["Beef", "BBQ Sauce", "Bacon"],
            more: "Try with extra crispy bacon",
            image: burger3
        },

        {
            id: 4,
            title: "Mega Delight Burger",
            description: "A plant-based patty topped with avocado, grilled onions, lettuce, tomato, and vegan mayo.",
            price: 7.99,
            flavors: ["Plant-Based Patty", "Avocado", "Grilled Onions"],
            more: "100% vegan and gluten-free option available",
            image: burger4
        },

        {
            id: 5,
            title: "Flavour Packed Wrap",
            description: "Savor the rich flavor of sautéed mushrooms, Swiss cheese, and garlic aioli on a buttery brioche bun.",
            price: 9.49,
            flavors: ["Beef", "Mushrooms", "Swiss Cheese"],
            more: "Perfect for mushroom lovers",
            image: burger5
        },

        {
            id: 6,
            title: "Double Decker Burger",
            description: "Two juicy beef patties, double the cheese, and all the fixings for a massive, flavor-packed burger.",
            price: 12.99,
            flavors: ["Double Beef Patties", "Cheese", "Lettuce"],
            more: "Comes with extra cheese and pickles",
            image: burger7
        }
    ])
    return (
        <CartContext.Provider value={[products, setCart, cart, setProducts, addToCart, setCartToggle, cartToggle]}>{children}</CartContext.Provider>
    )
}

export default CartContextProvider