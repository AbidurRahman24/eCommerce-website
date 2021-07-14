import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(product => product.key === key)
            product.quantity = saveCart[key];
            return product
        })
        setCart(cartProduct)
    }, []);
    const removeProduct = (productKey)=>{
        const newCart = cart.filter(product => product.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    {
                cart.map(product =>
                    <ReviewItem
                        product={product}
                        removeProduct={removeProduct}
                    >

                    </ReviewItem>)
            }
                    </div>
                    <div className="col-md-4">
                        <Card card={cart}></Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;