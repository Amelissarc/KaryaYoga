import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import Style from './ItemDetail.css';

const ItemDetail = ({ detalleProducto }) => {
    const { name, text, price, stock, img, id, category } = detalleProducto;
    const { addItem } = useCart();
    const [compra, setCompra] = useState(false);
    const onAdd = (cantidad) => {
        addItem(detalleProducto, cantidad);
        setCompra(true);
};
    return (
    <div className='containerDetail'> 
        <div  className='card-detail'>
            <div className='card-content'>
                <div className='img-detail'>
                    <img src={img} alt={name} style={{ width: '25rem', height: '20rem'}} className='img-detail'/>
                </div>
                <div className='container-info'>
                    <h2 className='titleDetail'> Detail of: {name} <i class="fa-regular fa-heart"></i></h2>
                    <p className="card-category-detail">{category}</p>
                    <p className='item-price'>${price}</p>
                    <p className="card-category-payment">See the payment methods</p>
                    <p className='text-detail'>{text}</p>
                    <p className="item-stock">Stock: {stock}</p>
                    {compra ? (
                        <Link className="buttonText" to={'/cart'}>
                            Go to cart
                        </Link>
                        ) : (
                        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default ItemDetail;
