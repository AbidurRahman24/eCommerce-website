import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product);
    return (
        <div>
            <h1>This is product details: {productKey}</h1>
            <Products showAddToCart={false} product={product}></Products>
        </div>
    );
};

export default ProductDetails;