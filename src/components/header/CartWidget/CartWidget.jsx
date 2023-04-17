import React from 'react';
import { useCart } from '../../../context/CartContext'

export const CartWidget = () => {
    const { cartQuantity } = useCart();
    const titleName = 'Cart';
    
return (
    <div className='cartWidge'>
        <a href="./Cart" >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='indicator'>{cartQuantity() || '0'}</span>
        </a>
        <span>{titleName}</span>
    </div>
);
};

export default CartWidget;


