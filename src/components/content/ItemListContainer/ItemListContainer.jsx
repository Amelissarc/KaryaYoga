import React  from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Style from './ItemList.css';

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = React.useState([]);
    const [productsData, setProductsData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();

    React.useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');
        let productsQuery;
        if (id) {
            productsQuery = query(productsCollection, where('category', '==', productsData.category));
        } else {
            productsQuery = productsCollection;
        }
        getDocs(productsQuery)
        .then((products) => {
            const productsData = products.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setListaProductos(productsData);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="container">
            <h2>
            {greeting} <span style={{ color: '#561220' }}>{id && id}</span>
            </h2>
            {loading ? <Loader /> : <ItemList listaProductos={listaProductos} />}
        </div>
    );
};

export default ItemListContainer;

