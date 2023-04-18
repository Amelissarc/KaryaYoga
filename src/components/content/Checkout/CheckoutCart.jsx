import React from 'react'

export default function CheckoutCart({cart, getTotalPrice, getTotalQuantity}) {
    return (
        <>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Tu Carrito</span>
                <span className="badge bg-primary rounded-pill">{getTotalQuantity()}</span>
            </h4>
            <ul className="list-group mb-3" id="listCheckout">

                {cart.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">{item.name}</h6>
                            <small className="text-muted">{item.quantity} x ${item.price.toLocaleString()}</small>
                        </div>
                        <span className="text-muted">${([item.price * item.quantity]).toLocaleString()}</span>
                    </li>
                ))}

                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (ARS$)</span>
                    <strong>${getTotalPrice().toLocaleString()}</strong>
                </li>

            </ul>
        </>
    )
}