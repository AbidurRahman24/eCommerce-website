import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {

    
    const handleAddProduct = () => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(fakeData),
        })
            .then(res => res.json())
            .then((data) => console.log(data));
    }
    return (
        <div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;