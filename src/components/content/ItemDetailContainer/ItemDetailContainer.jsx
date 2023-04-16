import React from 'react';
// import { getProducts } from '../../../Json/FakeApi';
import { doc, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productsData, setProductData] = React.useState({})
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const db =getFirestore();
        const docRef = doc(db, "product", id);
        getDocs(docRef)
        .then((product) => {
            if(product.exists()) {
                console.log("no products found")
            }
            setProductData({ id: product.id, ...product.data()});
        })
        .catch(err => console.error(err))
        .then(() =>{setLoading(false)})
        .finally(() => setLoading(false));
        // getProducts()
        // .then((res) => setProductsData(res.find((item) => item.id === id)))
        // .catch((error) => console.log(error))
        // .finally(() => setLoading(false));
    }, []);

    return  loading ? (
    <Loader />
    ) : (
    <div>
        {productsData.map((compra) => (
            <ItemDetail key={compra.id} compra={compra} />
        ))}
    </div>
    );
};

export default ItemDetailContainer;