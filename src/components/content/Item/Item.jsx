import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Item =() => {
    // const { id, category, img, name, text, price, stock} = producto;
    const navegar = useNavigate();
    const [productsData, setProductsData] = React.useState({});
    React.useEffect(() => {
        const db = getFirestore ();
        const itemsCollection = collection (db, "products");
        getDocs (itemsCollection)
        .then ((products) => {
            if(products.length === 0) {
                console.log("No products")
            }
            setProductsData(
                products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        })
        .catch(err => console.log(err))
        .then(()=> {
            console.log(productsData);
        })
    }, []);

    return (
    <Card style={{ width: '20rem' }} className="card-container">
        <Card.Img variant="top" src={productsData.img} className="card-img"/>
        <Card.Body >
            <p className="item-list-container__title">{productsData.name}</p>
            <p className="card-category">{productsData.category}</p>
            <p className="card-text">{productsData.text}</p>
            <div className="items-card">
                <div>
                <p className="item-price">Price: ${productsData.price}</p>
                <p className="item-stock">Stock: {productsData.stock}</p>
                </div>
                <button
                    className="buttonText"
                    onClick={() => navegar(`/item/${productsData.id}`)}
            >
                    See more
                </button>
            </div> 
        </Card.Body>
    </Card>
    )
}

export default Item;

