import React from 'react';
import { useCart } from '../../../context/CartContext';

const CartItem = ({ compra }) => {
    const { removeItem } = useCart();
    return (
    <div className='yourCartw'>
        <div className='cartGeneral'>
            <div className='cartGeneralImg'>
                <img src={compra.img} alt={compra.name} />
            </div>
        <div className="detailCart">
        <div className='cartGeneralDetail'>
            <span className='cartName'>{compra.name}</span>
            <span className='cartQuanty'>Quantity: {compra.quantity}</span>
            <button className="btn btnX" onClick={() => removeItem(compra.id)}>
            <i class="fa-solid fa-trash-can"></i> Remove
            </button>
        </div>
        <div className='cartPrice'>
            <span>Price: ${compra.price}</span>
        </div>
        </div>
    </div>
    </div>
    );
};

export default CartItem;
