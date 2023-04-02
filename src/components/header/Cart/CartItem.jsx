import React from 'react';
import { useCart } from '../../../context/CartContext';

const CartItem = ({ compra }) => {
    const { removeItem } = useCart();
    return (
        <div>
            <img src={compra.img} alt={compra.name} styte={{ width: '10rem' }} />
            <span>{compra.name}</span>
            <span>{compra.quantity}</span>
            <span>${compra.price}</span>
            <button className="btn btn-danger" onClick={() => removeItem(compra.id)}>
                X
            </button>
        </div>
    );
};

export default CartItem;
