import React, {useState} from 'react';
import { useCart } from '../../../context/CartContext'

export const CartWidget = () => {
    const { cartQuantity } = useCart();
    const titleName = 'Cart';
    
return (
    <div className='cartWidge'>
        <i className="fa-solid fa-cart-shopping">
        <span>{cartQuantity() || ''}</span>
        </i>
        <span>{titleName}</span>
    </div>
);
};

export default CartWidget;


