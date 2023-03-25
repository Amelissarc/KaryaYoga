import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const Item =({producto}) => {
    const { id, category, img, name, text, price, stock} = producto;
    const navegar = useNavigate();

    return (
    <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <p className="cardName">{name}</p>
            <p className="cardCategory">{category}</p>
            <p className="card-text">{text}</p>
            <p className="card-text">${price}</p>
            <p className="card-text">stock: {stock}</p> 
            <button
                className="btn btn-primary"
                onClick={() => navegar(`/item/${id}`)}
            >
                Ver más
            </button> 
        </Card.Body>
    </Card>
    )
}

export default Item;

