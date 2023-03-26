import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    }
    const lessCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

return (
    <>
        <div>
            <button className='btnCard' onClick={lessCount}>
                -
            </button>
            <span className='btnCard'>{count}</span>
            <button className='btnCard' onClick={addCount}>
                +
            </button> 
        </div>
        <button 
            className='buttonText' 
            disabled={count === 0 || stock === 0}
            onclick= {() => onAdd(count)}
        >
        Add to cart
        </button> 
    </>
);
}

export default ItemCount;