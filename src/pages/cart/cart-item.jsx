import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context';
import { XCircle } from 'phosphor-react';


export const CartItem = (props) => {
    // const {id, productName, price, productImage} = props.data;
    const { id, title, price, thumbnail } = props.data; // Adjusted to new format
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);


  return (
    <div className='cartItem'>
        <XCircle size={24} className="remove-icon" onClick={() => updateCartItemCount(0, id)} />
        <img src={thumbnail} alt={title} />
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
