import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const Item =({producto}) => {
    const { id, category, img, name, text, price, stock} = producto;
    const navegar = useNavigate();

    return (
    <Card style={{ width: '20rem' }} className="card-container">
        <Card.Img variant="top" src={img} className="card-img"/>
        <Card.Body >
            <p className="item-list-container__title">{name}</p>
            <p className="card-category">{category}</p>
            <p className="card-text">{text}</p>
            <div className="items-card">
                <div>
                <p className="item-price">Price: ${price}</p>
                <p className="item-stock">Stock: {stock}</p>
                </div>
                <button
                    className="buttonText"
                    onClick={() => navegar(`/item/${id}`)}
            >
                    See more
                </button>
            </div> 
        </Card.Body>
    </Card>
    )
}

export default Item;

