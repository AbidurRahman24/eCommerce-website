import React from 'react';

const Inventory = () => {


    const handleAddProduct = () => {
        const product = {}
         fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(product),
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