import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../../context/CartContext';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import loader from '../loader/loader';
import Style from './ItemDetail.css';

const ItemDetail = () => {
    // const { name, text, price, stock, img, id, category } = productsData;
    const { id } = useParams();
    const [productsData, setProductData] = React.useState({})
    const { addItem } = useCart();
    const [compra, setCompra] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
        
    React.useEffect(() => {
            const db = getFirestore();

            const docRef = doc(db, "products", id);
            getDoc(docRef)
            .then((product) => {
                if(product.exists()) {
                    console.log("no products found")
                }
                setProductData({ id: product.id, ...product.data() });
            })
            .catch((err) => console.error(err))
            .then(() => setLoading(false))
            .finally(() => setLoading(false));
    }, [id]);

    const onAdd = (cantidad) => {
        addItem(productsData, cantidad);
        setCompra(true);
    };

    return loading ? <loader /> : (
    <div className='containerDetail'> 
        <div  className='card-detail'>
            <div className='card-content'>
                <div className='img-detail'>
                    <img src={productsData.img} style={{ width: '25rem', height: '20rem'}} className='img-detail'/>
                </div>
                <div className='container-info'>
                    <h2 className='titleDetail'> Detail of: {productsData.name} <i class="fa-regular fa-heart"></i></h2>
                    <p className="card-category-detail">{productsData.category}</p>
                    <p className='item-price'>${productsData.price}</p>
                    <p className="card-category-payment">See the payment methods</p>
                    <p className='text-detail'>{productsData.text}</p>
                    <p className="item-stock">Stock: {productsData.stock}</p>
                    {compra ? (

                        <Link className="buttonText" to={'/cart'}>
                            Go to cart
                        </Link>
                        ) : (
                        <ItemCount initial={1} stock={productsData.stock} onAdd={onAdd} />
                    )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default ItemDetail;
