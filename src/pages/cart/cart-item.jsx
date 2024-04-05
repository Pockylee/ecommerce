import React, {useContext, useState} from 'react';
import { ShopContext } from '../../context/shop-context';
// import './cart.css';

export const CartItem = (props) => {
    // const {id, productName, price, productImage} = props.data;
    const { id, title, price, thumbnail } = props.data; // Adjusted to new format
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);


  return (
    <div className='cartItem'>
        <img src={thumbnail} />
        <div className="description">
            <p> 
                <b>{title} </b>
            </p>
            <p> ${price} </p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id) }> - </button>
                <input
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button onClick={() => addToCart(id) }> + </button>
            </div>
        </div>
    </div>
  )
}
