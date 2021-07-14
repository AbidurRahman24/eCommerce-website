import React from 'react';
import { Button } from 'react-bootstrap';

const ReviewItem = (props) => {
    const { name, quantity, price, key } = props.product;
    return (
        <div>
            <h4>{name}</h4>
            <h5>Quantity: {quantity}</h5>
            <h2>Price: {price}</h2>
            <Button onClick={() => props.removeProduct(key)}>Remove</Button>
        </div>
    );
};

export default ReviewItem;