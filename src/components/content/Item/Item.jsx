import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Item = ({ producto, onAdd }) => {
    // const { id, category, img, name, text, price, stock} = producto;
    const navegar = useNavigate();
    const [count] = useState();

    return (
        <Card style={{ width: "20rem" }} className='card-container'>
            <Card.Img variant='top' src={producto.img} className='card-img' />
            <Card.Body>
                <p className='item-list-container__title'>{producto.name}</p>
                <p className='card-category'>{producto.category}</p>
                <p className='card-text'>{producto.text}</p>
                <div className='items-card'>
                    <div>
                        <p className='item-price'>Price: ${producto.price}</p>
                        <p className='item-stock'>Stock: {producto.stock}</p>
                    </div>
                    <button
                        className='buttonText'
                        onClick={() => navegar(`/item/${producto.id}`)}>
                        See more
                    </button> 
                </div>
            </Card.Body>
        </Card>
    );
};

export default Item;
