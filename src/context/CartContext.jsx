import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, cantidad) => {
    setCart([...cart, { ...item, quantity: cantidad }]);
};

const clear = () => {
    setCart([]);
};

const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
};

const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
};

const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
};

const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
};

return (
    <CartContext.Provider
        value={{
            cart,
            clear,
            removeItem,
            isInCart,
            addItem,
            cartQuantity,
            cartTotal,
        }}
    >
        {children}
    </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);
