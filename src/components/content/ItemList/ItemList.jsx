import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ listaProductos }) => {
    return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}
    >
        {listaProductos.map((producto) => (
            <Item key={producto.id} producto={producto} />
        ))}
    </div>
    );
};

export default ItemList;