import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import CartItem from './CartItem';


const Cart = () => {
    const { cart, cartTotal, clear } = useCart();
    const navegar = useNavigate();
    console.log(cart);
    return (
        <div className='cartpage'>
            {!cart.length ? (
                <div className='goShopping'>
                    <h2>Your cart is empty</h2>
                    <button className='btn btn-success' onClick={() => navegar('/')}>
                        Go shopping
                    </button>
                </div>
            ) : (
                <div>
                    <h2 className='yourCart'>Your Cart</h2>
                    {cart.map((compra) => (
                        <CartItem key={compra.id} compra={compra} />
                    ))}
                    
                </div>
            )}
            <div className='cartButtons'>
                <h2>Order Summary</h2>
                <div className='cartSpan'>
                    <span>Total:</span>
                    <span>${cartTotal()}</span>
                </div>
                    <button 
                        className='btn btn-danger' 
                        onClick={clear}>
                            Empty cart
                    </button>
                    <button 
                        className='btn btn-success' 
                        onClick={() => navegar('/Checkout')}>
                            Finish purchase
                    </button>
                </div>
        </div>
    )
}
export default Cart;