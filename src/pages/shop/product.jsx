import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';


export const Product = (props) => {
    // const {} = props;
    const { id, title, price, thumbnail } = props.data;
    // const { id, productName, price, productImage } = props.data;
    const{ addToCart, cartItems } = useContext(ShopContext);

    const cartITemAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={thumbnail} alt={title} />
        <div className="description">
            <p> 
                <b>{title} </b>
            </p>
            <p> ${price} </p>

        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
            Add to Cart {cartITemAmount > 0 && `(${cartITemAmount})`}
        </button>
    </div>
  )
}
