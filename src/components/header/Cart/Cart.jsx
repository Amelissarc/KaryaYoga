import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cart, cartTotal, clear } = useCart();
    const navegar = useNavigate();
    console.log(cart);
    return (
        <div>
            {!cart.length ? (
                <div>
                    <h2>Your cart is empty</h2>
                    <button className='btn btn-success' onClick={() => navegar('/')}>
                        Go shopping
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Your cart</h2>
                    {cart.map((compra) => (
                        <CartItem key={compra.id} compra={compra} />
                    ))}
                    <span>Total payable: ${cartTotal()}</span>
                <div>
                    <button 
                        clas sName='btn btn-danger' 
                        onClick={clear}>
                            Empty cart
                    </button>
                    <button 
                        className='btn btn-success' 
                        onClick={() => navegar('/checkout')}>
                            Finish purchase
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}
export default Cart;