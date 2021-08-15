import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
    
    const removeProduct = (productKey) => {
        const newCart = cart.filter(product => product.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt="" />
    }
    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('https://vast-brook-89040.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => {
            setCart(data)
            console.log(data)})
    }, []);
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