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
                    <h2>Tu carrito esta vacio</h2>
                    <button className='btn btn-success' onClick={() => navegar('/')}>
                        Ir a comprar
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Tu carrito</h2>
                    {cart.map((compra) => (
                        <CartItem key={compra.id} compra={compra} />
                    ))}
                    <span>Total a pagar: ${cartTotal()}</span>
                <div>
                    <button className='btn btn-danger' onClick={clear}>
                        Vaciar carrito
                    </button>
                    <button className='btn btn-success' onClick={() => navegar('/checkout')}>
                        Terminar compra
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}
export default Cart;