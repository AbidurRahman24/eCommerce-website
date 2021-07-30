import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory()

    const handlePlaceOrder = () => {
        history.push('./shipment')
    }
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt="" />
    }
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
    const removeProduct = (productKey) => {
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
                        {thankyou}
                    </div>
                    <div className="col-md-4">
                        <Card card={cart} key={cart.key}></Card>
                        <Button onClick={handlePlaceOrder}>Procced to Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;