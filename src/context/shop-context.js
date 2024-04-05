import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from '../api/apiService';

export const ShopContext = createContext({
    products: [],
});

export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]); // Will store fetched products
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
          const fetchData = async () => {
              try {
                  const fetchedProducts = await getProducts();
                  setProducts(fetchedProducts);
                  setCartItems(getDefaultCart(fetchedProducts));
              } catch (error) {
                  console.error('Failed to fetch products:', error);
              }
          };
          fetchData();
      }, []);
  
      const getDefaultCart = (fetchedProducts) => {
          let cart = {};
          fetchedProducts.forEach(product => {
              cart[product.id] = 0; // Initialize cart item count to 0
          });
          return cart;
      };

      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
      };

      const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
      };

      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
      };

      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
      }

      const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, products};
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
