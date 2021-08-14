import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/product/' + productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productKey])
    // const product = fakeDat.find(pd => pd.key === productKey)
    // console.log(product);
    return (
        <div>
            <h1>This is product details: {productKey}</h1>
            <Products showAddToCart={false} product={product}></Products>
        </div>
    );
};

export default ProductDetails;