import React, {useState, useEffect} from 'react';
import { CardComponent } from '../ItemCartComponent/ItemCartComponent';
import styles from './ItemList.css';

export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('../Json/catalogo')
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const loadItems = () => {
        return new Promise ((resolve, reject) => {
            if(!isLoading && items.length === 0) {
                setIsLoading(true);
                setTimeout(() => {
                    try {
                        const newItems = [
                            { 
                                "id": "15",
                                "category" : "YogaSet",
                                "imgSrc": "",
                                "title": "Card Title 15",
                                "text": "Some quick example text to build on the card title and make up the bulk of the card\'s content.",
                                "buttonText": "Add to Cart"
                            }
                        ]
                        setItems(newItems);
                        setIsLoading(false);
                        resolve(newItems);
                    } catch (error) {
                        setIsLoading(false);
                        reject(error);
                    }
                },2000);
            } else {
                resolve(items);
            }
        });
    };
    return (
        <div className="item-list-container">
            <h2 className="item-list-container__title">{greeting}</h2>
            <div className="item-list-container__content"> 
            {items.map(item => (
                <CardComponent
                key={item.id}
                id={item.id}
                category={item.category}
                imgSrc={item.imgSrc}
                title={item.title}
                text={item.text}
                buttonText={item.buttonText}
                />
            ))} 
            </div>
            <button onClick={loadItems}>Load More Items</button>
        </div>
    );
};

export default ItemListContainer;
