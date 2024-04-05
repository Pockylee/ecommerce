import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';

import { useNavigate } from 'react-router-dom';

import './cart.css';

export const Cart = () => {
    const { cartItems, products, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
  return (
    <div className='cart'>
        <div>
            <h1> Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {products && products.length > 0 && products.map((product) =>{
                if (cartItems[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />
                }
                return null;
            })}
        </div>

        {totalAmount > 0  ? (
        <div className="checkout">
            <p> Subtotal: ${totalAmount}</p>
            <div className="buttons">
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button>Checkout</button>
            </div>
        </div>
        ):(
        <div className="emptyCart">
            <h1> Your cart is empty</h1>
            <button onClick={() => navigate("/")}> Go Shopping</button>
        </div>)}
    </div>
  );
};
