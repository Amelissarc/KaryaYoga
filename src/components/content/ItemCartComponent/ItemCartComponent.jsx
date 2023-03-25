import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export const CardComponent = (props) => {
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [contador, setContador] = useState(0);

    const changeImage = () => {
        setImgSrc(props.newImgSrc);
    };

    const addContador = () => {
        setContador(contador + 1);
    }
    const lessContador = () => {
        setContador(contador - 1);
    }

return (
    <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <button className='btnCard' onClick={lessContador}>-</button>
            <span className='btnCard'>{contador}</span>
            <button className='btnCard' onClick={addContador}>+</button>
            <button className='buttonText' >{props.buttonText}</button>     
        </Card.Body>
    </Card>
);
}

export default CardComponent;