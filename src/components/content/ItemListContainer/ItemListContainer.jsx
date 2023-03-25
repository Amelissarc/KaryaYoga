import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../../Json/FakeApi';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import Style from './ItemList.css';

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProducts()
        .then((res) => {
            if (id) {
                setListaProductos(res.filter((item) => item.category === id));
            } else {
                setListaProductos(res);
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className='container'>
            <h2>
                {greeting}{' '}
                <span style={{ color: '#561220' }}>
                    {id && id}
                </span>
            </h2>
                {loading ? <Loader /> : <ItemList listaProductos={listaProductos} />}
        </div>
    );
};

export default ItemListContainer;
